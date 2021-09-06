import React from 'react'
import MainLayout from '../../layouts/MainLayout';
import { Button, Card, Grid } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import s from '../../styles/tracks.module.css';
import { ITrack } from '../../types/track';
import TrackList from '../../components/TrackList';


export default function index() {
    const router = useRouter()

    const tracks: ITrack[] = [
        {
            _id: '1',
            name: 'Трек 1',
            artist: 'somebody 1',
            text: 'some text',
            audio: 'http://localhost:8080/audio/track-1.mp3',
            image: 'http://localhost:8080/image/image-1.jpg',
            listens: 3,
            comments: []
        },
        {
            _id: '2',
            name: 'Трек 2',
            artist: 'somebody 2',
            text: 'i written this text',
            audio: 'http://localhost:8080/audio/track-2.mp3',
            image: 'http://localhost:8080/image/image-2.jpg',
            listens: 2900000,
            comments: []
        }, ,
        {
            _id: '3',
            name: 'Трек 3',
            artist: 'somebody 3',
            text: 'i written this text too',
            audio: 'http://localhost:8080/audio/track-3.mp3',
            image: 'http://localhost:8080/image/image-3.jpg',
            listens: 3000,
            comments: []
        },
    ]

    return (
        <MainLayout>
            <Grid container>
                <Card className={s.card}>
                    <Grid container justifyContent="space-between">
                        <h1>
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
