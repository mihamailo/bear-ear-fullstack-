import { createAsyncThunk } from '@reduxjs/toolkit';
import {findTracksRequest} from 'utils/bearApi';

export const findTracks = createAsyncThunk(
  'playerSlice/findTracks',
  async (query) => {
    let data;
    await findTracksRequest(query)
    .then((res) => {
      data = res.data;
    });
    return data;
  }
);