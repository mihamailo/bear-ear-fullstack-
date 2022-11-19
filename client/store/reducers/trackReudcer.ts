import { FormatListNumbered } from '@material-ui/icons';
import { createSlice } from '@reduxjs/toolkit';
import { findTracks } from 'store/async-actions/findTracks-action';
import { getTracks } from 'store/async-actions/getTracks-action';

const initialState = {
    tracks: [],
    tracksRequest: false,
    tracksError: false,
}

export const trackSlice = createSlice({
    name: 'trackSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(findTracks.pending, state => {
                state.tracksRequest = true;
                state.tracksError = false;
            })
            .addCase(findTracks.fulfilled, (state, action) => {
                state.tracksRequest = false;
                state.tracks = action.payload;
            })
            .addCase(findTracks.rejected, state => {
                state.tracksError = true;
                state.tracksRequest = false;
                state.tracks = [];
            })

            .addCase(getTracks.pending, state => {
                state.tracksRequest = true;
                state.tracksError = false;
            })
            .addCase(getTracks.fulfilled, (state, action) => {
                state.tracksRequest = false;
                state.tracks = action.payload;
            })
            .addCase(getTracks.rejected, state => {
                state.tracksError = true;
                state.tracksRequest = false;
                state.tracks = [];
            })
    }
});

export default trackSlice.reducer;