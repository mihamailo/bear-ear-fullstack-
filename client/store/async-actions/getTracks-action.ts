import { createAsyncThunk } from '@reduxjs/toolkit';
import {getTracksRequest} from 'utils/bearApi';

export const getTracks = createAsyncThunk(
  'trackSlice/getTracks',
  async () => {
    const { data } = await getTracksRequest();
    return data;
  }
);