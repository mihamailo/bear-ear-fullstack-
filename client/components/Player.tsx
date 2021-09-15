import { Grid, IconButton } from '@material-ui/core'
import { Pause, PlayArrow, VolumeOff, VolumeUp } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import s from '../styles/Player.module.scss';
import TrackProgress from './TrackProgress';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useAction';
import { baseUrl } from './baseURL';

let audio
let firstplay = 0
const Player = () => {
    const { pause, volume, active, duration, currentTime } = useTypedSelector(state => state.player)
    const { pauseTrack, playTrack, setVolume, setCurrentTime, setDuration } = useActions()
    const [volumeOff, setVolumeOff] = useState<boolean>(true)

    useEffect(() => {
        if (!audio) {
            audio = new Audio()
            return
        }
        console.log('active ch')
        setAudio()
        // playToggle()
    }, [active])


    useEffect(() => {
        if (firstplay > 0 && firstplay < 2) {
            console.log('first play')
            if (!audio) {
                audio = new Audio()
                return
            }
            setAudio()
            audio.play()
        }
        firstplay++
        // if (active) {
        //     if (pause) {
        //         audio.play()
        //     } else {
        //         audio.pause()
        //     }
        // }
    }, [pause])


    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value)
        setCurrentTime(value)
        audio.currentTime = value
    }

    const playToggle = () => {
        if (active) {
            console.log('play toggle fn');

            if (pause) {
                console.log('play');

                playTrack()
                audio.play()
            } else {
                console.log('pause');
                pauseTrack()
                audio.pause()
            }
        }
    }

    const playAudio = () => {
        audio.play()
    }

    const setAudio = () => {
        if (active) {
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

    const muteAudio = () => {
        setVolumeOff(!volumeOff)
        if (volumeOff) {
            audio.volume = 0
            setVolume(0)
        }
        else {
            audio.volume = 0.5
            setVolume(50)
        }
    }

    if (!active) {
        return null
    }

    return (
        <div className={s.player}>
            <IconButton onClick={playToggle} style={{ marginRight: '10px' }}>
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
            <div onClick={muteAudio}>
                {volumeOff ? <VolumeUp /> : <VolumeOff />}
            </div>
            <TrackProgress isTime={false} left={volume} right={100} onChange={changeVolume} />
        </div>
    )
}
export default Player