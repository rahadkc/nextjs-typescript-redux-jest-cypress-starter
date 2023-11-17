import React, { ReactNode, memo } from 'react'

type BooleanWrapperType = {
  children: ReactNode
  shouldRender: boolean
}
const BooleanWrapper = ({ shouldRender, children }: BooleanWrapperType) => {
  if (!shouldRender) return <></>
  return children
}

export default memo(BooleanWrapper)
