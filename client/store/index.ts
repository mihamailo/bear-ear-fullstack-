import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from "store/reducers";

export default function getStore(prevState?) {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState: prevState || {},
  });
  return store;
}