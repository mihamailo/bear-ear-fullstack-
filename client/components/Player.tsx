import { Grid, IconButton } from '@material-ui/core'
import { Pause, PlayArrow, VolumeUp } from '@material-ui/icons'
import React, { useEffect } from 'react'
import s from '../styles/Player.module.scss';
import TrackProgress from './TrackProgress';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useAction';
import { baseUrl } from './baseURL';

let audio

const Player = () => {
    const { pause, volume, active, duration, currentTime } = useTypedSelector(state => state.player)
    const { pauseTrack, playTrack, setVolume, setCurrentTime, setDuration } = useActions()


    useEffect(() => {
        if (!audio) {
            audio = new Audio()
        } else {
            setAudio()
            play()
        }
    }, [active])

    useEffect(() => {

    }, [pause])

    const play = () => {
        if (pause) {
            audio.play()
            playTrack()
        } else {
            console.log('pause');
            audio.pause()
            pauseTrack()
        }
    }

    const setAudio = () => {
        if (active) {
            console.log(active);
            audio.src = baseUrl + active.audio

            audio.volume = volume / 100
            audio.onloadedmetadata = () => {
                setDuration(Math.ceil(audio.duration))
            }
            audio.ontimeupdate = () => {
                setCurrentTime(Math.ceil(audio.currentTime))
            }
        }
    }

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value)
        setVolume(value)
        audio.volume = value / 100
    }

    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value)
        setCurrentTime(value)
        audio.currentTime = value
    }

    if (!active) {
        return null
    }

    return (
        <div className={s.player}>
            <IconButton onClick={play} style={{ marginRight: '10px' }}>
                {pause
                    ? <PlayArrow />
                    : <Pause />
                }
            </IconButton>
            <Grid className={s.trackInfo} container direction='column'>
                <div className={s.trackArtist}>{active?.artist}</div>
                <div className={s.trackName}>{active?.name}</div>
            </Grid>
            <TrackProgress isTime={true} left={currentTime} right={duration} onChange={changeCurrentTime} />
            <TrackProgress isTime={false} left={volume} right={100} onChange={changeVolume} />
            <VolumeUp />
        </div>
    )
}
export default Player