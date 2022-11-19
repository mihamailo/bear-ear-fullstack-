import { PlayerState } from 'types/player';
import { createSlice } from '@reduxjs/toolkit';

const initialState: PlayerState = {
    active: null,
    volume: 25,
    duration: 0,
    currentTime: 0,
    pause: true,
    audio: null,
}

export const playerSlice = createSlice({
    name: 'playerSlice',
    initialState,
    reducers: {
        setAudio: (state, action) => {
            state.audio = action.payload;
        },
        playTrack: state => {
            state.pause = false;
        },
        pauseTrack: state => {
            state.pause = true;
        },
        setActive: (state, action) => {
            state.active = action.payload;
            state.duration = 0;
            state.currentTime = 0;
        },
        setDuration: (state, action) => {
            state.duration = action.payload;
        },
        setCurrentTime: (state, action) => {
            state.currentTime = action.payload;
        },
        setVolume: (state, action) => {
            state.volume = action.payload;
        },
    }
});

export default playerSlice.reducer;