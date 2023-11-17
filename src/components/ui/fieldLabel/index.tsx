import { ReactNode } from 'react'

const FieldLabel = ({ children }: { children: ReactNode }) => {
  return <h6 className="font-bold mb-2">{children}</h6>
}

export default FieldLabel
