import React from 'react';
import { ITrack } from '../types/track';
import s from '../styles/TrackItem.module.scss';
import IconButton from '@material-ui/core/IconButton';
import { Card, Grid } from '@material-ui/core';
import { Pause, PlayArrow } from '@material-ui/icons';
import { useRouter } from 'next/dist/client/router';
import { Delete } from '@material-ui/icons';
import { useActions } from '../hooks/useAction';
import { baseUrl } from './baseURL';


interface TrackItemProps {
    track: ITrack;
    active?: boolean;
    pause?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, pause, active = false }) => {
    const router = useRouter()
    const { setActive, pauseTrack } = useActions()

    const play = (e) => {
        e.stopPropagation()
        if (pause && !active) {
            setActive(track)
        } else {
            audio.pause()
            pauseTrack()
        }
    }

    return (
        <Card className={s.track} onClick={() => router.push('/tracks/' + track._id)}>
            <IconButton onClick={play}>
                {(!pause && active)
                    ? <Pause />
                    : <PlayArrow />
                }
            </IconButton>
            <img style={{ objectFit: 'cover' }} width={60} height={60} src={baseUrl + track.image} />
            <Grid className={s.trackInfo} container direction='column'>
                <div className={s.trackArtist}>{track.artist}</div>
                <div className={s.trackName}>{track.name}</div>
            </Grid>
            {active && <div className={s.trackTimeLine}>00:40 / 3:12</div>}
            <IconButton onClick={e => e.stopPropagation()}>
                <Delete />
            </IconButton>
        </Card>
    )
}



export default TrackItem;
