import type { AppProps } from 'next/app'

import Header from '../components/Header'

import '../styles/global.scss';
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination"
import "swiper/css/navigation"

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <Header />

      <Component {...pageProps} />
    </>
  )
}
export default MyApp
