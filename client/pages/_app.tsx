import React, { FC } from "react";
import { AppProps } from "next/app";
import "styles/globals.css";
import {Provider} from "react-redux";
import getStore from '../store/index';

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={getStore(pageProps.initialState)}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;