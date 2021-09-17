import { TrackAction, TrackActionTypes } from './../../types/track';
import { Dispatch } from "react"
import axios from 'axios'
import { baseUrl } from '../../components/baseURL';


export const fetchTracks = () => {
    return async (dispatch: Dispatch<TrackAction>) => {
        try {
            const res = await axios.get(`${baseUrl}/tracks`)
            dispatch({ type: TrackActionTypes.FETCH_TRACKS, payload: res.data })
        } catch (err) {
            dispatch({
                type: TrackActionTypes.FETCH_TRACKS_ERROR,
                payload: 'Error loading'
            })
        }
    }
}

export const searchTracks = (query: string) => {
    return async (dispatch: Dispatch<TrackAction>) => {
        try {
            const res = await axios.get(`${baseUrl}/tracks/search?query=` + query)
            dispatch({ type: TrackActionTypes.FETCH_TRACKS, payload: res.data })
        } catch (err) {
            dispatch({
                type: TrackActionTypes.FETCH_TRACKS_ERROR,
                payload: 'Tracks not found'
            })
        }
    }
}

