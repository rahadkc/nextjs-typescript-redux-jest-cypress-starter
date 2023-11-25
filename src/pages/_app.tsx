import ReduxProvider from '../redux/provider'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SwrConfigProvider from '../http/swrConfigProvider'
import ThemeClientWrapper from '../theme/themeClientWrapper'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <SwrConfigProvider>
        <ThemeClientWrapper>
          <Component {...pageProps} />
        </ThemeClientWrapper>
      </SwrConfigProvider>
    </ReduxProvider>
  )
}
