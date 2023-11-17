import React, { useEffect } from 'react'
import { Middleware, SWRConfig, SWRHook, mutate } from 'swr'
import { fetchRequest } from '.'

export type ISwrConfigProviderProps = {
  children: React.ReactNode
}
let liveQueries = new Set()

/**
 * trackLiveQueries - will track current active request
 * and revalidate accordingly. So we don't have to call revalidate/mutate manually in our code
 */
const trackLiveQueries: Middleware = (useSWRNext: SWRHook) => (key, fetcher, config) => {
  const swr = useSWRNext(key, fetcher, config)

  useEffect(() => {
    liveQueries.add(key)

    return () => {
      liveQueries.delete(key)
    }
  }, [key])

  return swr
}

export function revalidateLiveQueries() {
  ;[...liveQueries.values()].map((key: any) => mutate(key))
}

const SwrConfigProvider: React.FC<ISwrConfigProviderProps> = ({ children }) => {
  return (
    <SWRConfig
      value={{
        fetcher: fetchRequest,
        revalidateOnFocus: false,
        refreshWhenOffline: false,
        refreshWhenHidden: false,
        refreshInterval: 0,
        keepPreviousData: true,
        use: [trackLiveQueries],
      }}
    >
      {children}
    </SWRConfig>
  )
}

export default SwrConfigProvider
