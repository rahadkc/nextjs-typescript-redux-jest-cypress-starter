import ReduxProvider from '../redux/provider'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SwrConfigProvider from '../http/swrConfigProvider'
import { Toaster } from '../lib/toast'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <SwrConfigProvider>
        <Toaster toastOptions={{ duration: 2000 }} />
        <Component {...pageProps} />
      </SwrConfigProvider>
    </ReduxProvider>
  )
}
