import { TrackAction, TrackActionTypes } from './../../types/track';
import { Dispatch } from "react"
import axios from 'axios'

export const fetchTracks = () => {
    return async (dispatch: Dispatch<TrackAction>) => {
        try {
            const res = await axios.get('http://localhost:8080/tracks')
            dispatch({ type: TrackActionTypes.FETCH_TRACKS, payload: res.data })
        } catch (err) {
            dispatch({
                type: TrackActionTypes.FETCH_TRACKS_ERROR,
                payload: 'Error loading'
            })
        }
    }
}