import { AppProps } from 'next/dist/shared/lib/router/router';
import { ReactElement } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}

export default MyApp;
