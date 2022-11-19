import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from "store/reducers";

export default function getStore() {
  const store = configureStore({
    reducer: rootReducer,
  });
  return store;
}