import { Button, Grid } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import React, { useState } from 'react'
import MainLayout from '../../layouts/MainLayout';
import s from '../../styles/TrackPage.module.scss';
import { TextField } from '@material-ui/core';
import { GetServerSideProps } from 'next';
import { baseUrl } from '../../components/baseURL';
import axios from 'axios';
import { ITrack } from '../../types/track';
import { useInput } from '../../hooks/useInput';

const PageTrack = ({ serverTrack }) => {
    const [track, setTrack] = useState<ITrack>(serverTrack)
    const username = useInput('')
    const text = useInput('')
    const router = useRouter()

    const addComment = async () => {
        try {
            const response = await axios.post(baseUrl + '/tracks/comment', {
                username: username.value,
                text: text.value,
                trackId: track._id,
            })
            console.log(response);

            setTrack({ ...track, comments: [...track.comments, response.data] })
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <MainLayout title={'Bear Ear - ' + track.name + ' - ' + track.artist}>
            <Button
                variant={'outlined'}
                onClick={() => router.push('/tracks')}
                style={{ marginBottom: '20px' }}
            >
                Go back
            </Button>
            <Grid container>
                <img className={s.image} src={baseUrl + "/" + track.image} alt="" width={150} height={150} />
                <div className={s.infoContainer}>
                    <div className={s.name}>{track.name}</div>
                    <div className={s.artist}>{track.artist}</div>
                    <div className={s.listens}>Listens: {track.listens}</div>
                </div>
            </Grid>
            <div className="title" style={{ textAlign: 'center' }}>Lyrics</div>
            <div className={s.lyrics}>{track.text}</div>
            <div>
                <div className="title">Comments</div>
                <Grid className={s.commentsForm}>
                    <TextField
                        {...username}
                        label='Your name'
                        fullWidth
                        style={{ marginBottom: '30px' }}
                    />
                    <TextField
                        {...text}
                        label='Your comment'
                        fullWidth
                        multiline
                        rows={3}
                        style={{ marginBottom: '20px' }}
                    />
                    <Button
                        variant={'contained'}
                        onClick={addComment}
                    >Send</Button>
                </Grid>
                {track.comments.map((comment, id) =>
                    <div key={id} className={s.commentsBody}>
                        <div className={s.commentsAuthor}>
                            {comment.username}
                        </div>
                        <div className={s.commentsText}>
                            {comment.text}
                        </div>
                    </div>
                )}
            </div>
        </MainLayout>
    )
}

export default PageTrack



export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const res = await axios.get(baseUrl + '/tracks/' + params.id)

    return {
        props: {
            serverTrack: res.data
        }
    }
}