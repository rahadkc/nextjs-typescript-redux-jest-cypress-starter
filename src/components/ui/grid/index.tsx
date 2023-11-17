import { ReactNode } from 'react'

type GridProps = {
  children: ReactNode
  cols?: number
  gap?: number
  customClass?: string
}

const Grid = ({ cols = 1, gap = 0, customClass, children }: GridProps) => {
  const COLS = `grid-cols-${cols}`
  const GAP = `gap-${gap}`
  return <div className={`grid ${COLS} ${GAP} ${customClass ?? ''}`}>{children}</div>
}

export default Grid
