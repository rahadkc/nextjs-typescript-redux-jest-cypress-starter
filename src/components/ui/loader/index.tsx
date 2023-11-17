import { memo } from 'react'
import { COLOR_TYPE, SIZE_TYPE } from '../../../lib/constants'

type LoaderType = {
  color?: COLOR_TYPE
  size?: SIZE_TYPE
  variant?: 'loading-spinner' | 'loading-ball'
  customClass?: string
}

const Loader = ({ color = COLOR_TYPE.PRIMARY, size = SIZE_TYPE.MD, variant, customClass }: LoaderType) => {
  const COLOR = `text-${color}`
  const SIZE = `loading-${size}`
  return (
    <>
      <span data-testid="loader" className={`loading ${SIZE} ${variant} ${COLOR} ${customClass}`}></span>
      Loading
    </>
  )
}

export default memo(Loader)
