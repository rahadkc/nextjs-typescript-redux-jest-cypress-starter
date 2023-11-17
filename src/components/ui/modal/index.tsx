import React, { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

type Props = {
  children: React.ReactNode
  open: boolean
  disableClickOutside?: boolean
  onClose: () => void
  title?: string
}
const Modal = ({ children, open, disableClickOutside, onClose, title }: Props) => {
  const ref = useRef(null)

  useOnClickOutside(ref, () => {
    if (!disableClickOutside) {
      onClose()
    }
  })

  if (!open) return null

  return (
    <div data-testid="modal" className={`modal modal-bottom md:modal-middle ${open ? 'modal-open' : ''}`}>
      <div className="modal-box" ref={ref}>
        {title ? <h3 className="text-4xl font-bold mb-7">{title}</h3> : null}
        {children}
      </div>
    </div>
  )
}

export default Modal
