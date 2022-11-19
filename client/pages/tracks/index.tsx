import React, { useState } from 'react'
import MainLayout from 'layouts/MainLayout';
import { Button, Card, Grid, TextField } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import TrackList from 'components/TrackList';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { getTracks } from 'store/async-actions/getTracks-action';
import { findTracks } from 'store/async-actions/findTracks-action';
import { useDispatch } from 'react-redux';
import getStore from 'store';


export default function index() {
    const router = useRouter()
    const { tracks, tracksError } = useTypedSelector(state => state.trackSliceReducer);
    const [query, setQuery] = useState<string>('');
    const [timer, setTimer] = useState(null);
    const dispatch = useDispatch();

    const search = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
        if (timer) {
            clearTimeout(timer)
        }
        setTimer(setTimeout(() => {
            dispatch(findTracks());
        }, 500))
    }

    if(tracksError) {
        return <MainLayout title={'Bear Ear - Track List'}>
            <div className='title'>При попытке загрузить треки произошла ошибка.</div>
        </MainLayout>
    }

    return (
        <MainLayout>
            <Grid container>
                <Card className='card'>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <h1 className='title'>
                            Track list
                        </h1>
                        <Button onClick={() => router.push('/tracks/create')}>
                            Put your track
                        </Button>
                    </Grid>
                    <TextField
                        fullWidth
                        value={query}
                        onChange={search}
                        label='Search by track name'
                    />
                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </MainLayout>
    )
}

export async function getServerSideProps() {
    const store = getStore();
    const dispatch = store.dispatch;
    await dispatch(getTracks());
    return {
        props: {
            intialState: store.getState(),
        },
    };
}