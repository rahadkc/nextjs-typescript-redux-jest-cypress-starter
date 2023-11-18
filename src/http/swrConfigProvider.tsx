import React from 'react'
import { SWRConfig } from 'swr'
import { fetchRequest } from '.'

export type ISwrConfigProviderProps = {
  children: React.ReactNode
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
      }}
    >
      {children}
    </SWRConfig>
  )
}

export default SwrConfigProvider
