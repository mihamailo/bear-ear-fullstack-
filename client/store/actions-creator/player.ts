import { ITrack } from './../../types/track';
import { PlayerActionTypes } from './../../types/player';

export const setAudio = (payload: HTMLAudioElement) => {
    return { type: PlayerActionTypes.SET_AUDIO, payload }
}

export const playTrack = () => {
    return { type: PlayerActionTypes.PLAY }
}

export const pauseTrack = () => {
    return { type: PlayerActionTypes.PAUSE }
}

export const setActive = (payload: ITrack) => {
    return { type: PlayerActionTypes.SET_ACTIVE, payload }
}

export const setDuration = (payload: number) => {
    return { type: PlayerActionTypes.SET_DURATION, payload }
}

export const setCurrentTime = (payload: number) => {
    return { type: PlayerActionTypes.SET_CURRENT_TIME, payload }
}

export const setVolume = (payload: number) => {
    return { type: PlayerActionTypes.SET_VOLUME, payload }
}