'use client'
import { ReactNode } from 'react'
import { useAppSelector } from '../redux/hook'
import { selectTheme } from '../redux/reducers/themeSlice'

const ThemeClientWrapper = ({ children }: { children: ReactNode }) => {
  const theme = useAppSelector(selectTheme)

  return (
    <div data-theme={theme} className="min-h-screen flex-col">
      {children}
    </div>
  )
}

export default ThemeClientWrapper
