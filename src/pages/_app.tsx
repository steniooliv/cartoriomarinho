import type { AppProps } from 'next/app'

import Header from '../components/Header'

import '../styles/global.scss';

import "swiper/css/bundle";

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <Header />

      <Component {...pageProps} />

    </>
  )
}
export default MyApp
