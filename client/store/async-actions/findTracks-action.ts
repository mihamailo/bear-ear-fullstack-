import { createAsyncThunk } from '@reduxjs/toolkit';
import {findTracksRequest} from 'utils/bearApi';

export const findTracks = createAsyncThunk(
  'playerSlice/findTracks',
  async (query: string) => {
    const { data } = await findTracksRequest(query);
    return data;
  }
);