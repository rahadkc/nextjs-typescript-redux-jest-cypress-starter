import React from 'react'
import FieldLabel from '../fieldLabel'

const FormControl = ({
  children,
  fieldLabel,
  helperText,
}: {
  children: React.ReactNode
  fieldLabel?: string
  helperText?: string
}) => {
  return (
    <div className="form-control mb-2">
      {fieldLabel ? <FieldLabel>{fieldLabel}</FieldLabel> : ''}
      {children}
      {helperText ? <div className="text-error helperText text-sm">{helperText}</div> : ''}
    </div>
  )
}

export default FormControl
