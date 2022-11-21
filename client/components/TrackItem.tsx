import React from 'react';
import { ITrack } from 'types/track';
import s from 'styles/TrackItem.module.scss';
import IconButton from '@material-ui/core/IconButton';
import { Card, Grid } from '@material-ui/core';
import { Pause, PlayArrow } from '@material-ui/icons';
import { useRouter } from 'next/dist/client/router';
import { Delete } from '@material-ui/icons';
import { baseUrl } from 'utils/bearApi';
import { useTypedSelector } from 'hooks/useTypedSelector';
import useFormat from 'hooks/useFormat'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getTracks } from 'store/async-actions/getTracks-action';
import {playerSlice} from 'store/reducers/playerSlice';

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
    pause?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, pause, active = false }) => {
    const router = useRouter()
    const { audio, currentTime, duration } = useTypedSelector(state => state.playerSliceReducer)
    const { setActive, pauseTrack, playTrack, setAudio } = playerSlice.actions;
    const dispatch = useDispatch()
    const play = (e) => {
        e.stopPropagation()
        if (active) {
            if (pause) {
                playTrack()
                audio.play()
            } else {
                pauseTrack()
                audio.pause()
            }
        } else {
            setActive(track)
        }
    }

    const deleteItem = async (e) => {
        e.stopPropagation()
        await axios.delete(`${baseUrl}/tracks/` + track._id)
        await dispatch(getTracks())
    }

    return (
        <Card className={s.track} onClick={() => router.push('/tracks/' + track._id)}>
            <IconButton onClick={play}>
                {(!pause && active)
                    ? <Pause />
                    : <PlayArrow />
                }
            </IconButton>
            <img style={{ objectFit: 'cover' }} width={60} height={60} src={baseUrl + '/' + track.image} />
            <Grid className={s.trackInfo} container direction='column'>
                <div className={s.trackArtist}>{track.artist}</div>
                <div className={s.trackName}>{track.name}</div>
            </Grid>

            {active &&
                <div className={s.trackTimeLine}>
                    <div style={{ whiteSpace: 'nowrap', width: '50px', textAlign: 'center' }}>
                        {useFormat(currentTime)}
                    </div>
                    <div>/</div>
                    <div style={{ whiteSpace: 'nowrap', width: '50px', textAlign: 'center' }}>
                        {useFormat(duration)}
                    </div>
                </div>}
            <IconButton onClick={deleteItem}>
                <Delete />
            </IconButton>
        </Card>
    )
}
export default TrackItem;
