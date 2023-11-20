import ReduxProvider from '../redux/provider'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SwrConfigProvider from '../http/swrConfigProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <SwrConfigProvider>
        <Component {...pageProps} />
      </SwrConfigProvider>
    </ReduxProvider>
  )
}
