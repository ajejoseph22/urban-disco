import React from 'react';
import { AppProps } from 'next/app';
import '../src/styles/index.css';

const CustomApp = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default CustomApp;
