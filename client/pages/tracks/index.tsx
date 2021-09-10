import React from 'react'
import MainLayout from '../../layouts/MainLayout';
import { Button, Card, Grid } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import TrackList from '../../components/TrackList';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { wrapper } from '../../store';
import { fetchTracks } from '../../store/actions-creator/tracks';
import { NextThunkDispatch } from '../../store/index';


function index() {
    const router = useRouter()
    const { tracks, error } = useTypedSelector(state => state.track)


    if (error) {
        return <MainLayout title={'Bear Ear - Track List'}>
            <div className='title'>{error}</div>
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
                    <TrackList tracks={tracks} />
                </Card>
            </Grid>
        </MainLayout>
    )
}

export default index;

export const getServerSideProps
    = wrapper.getServerSideProps((store) => async () => {
        const dispatch = store.dispatch as NextThunkDispatch;
        await dispatch(fetchTracks());

        return { props: {} }
    }
    );
