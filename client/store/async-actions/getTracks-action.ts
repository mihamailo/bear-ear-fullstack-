import { createAsyncThunk } from '@reduxjs/toolkit';
import {getTracksRequest} from 'utils/bearApi';

export const getTracks = createAsyncThunk(
  'trackSlice/getTracks',
  async () => {
    let data;
    await getTracksRequest()
    .then((res) => {
      data = res.data;
    });
    return data;
  }
);