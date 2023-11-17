import React, { ButtonHTMLAttributes, ReactNode } from 'react'
import Loader from '../loader'

export enum ButtonVariant {
  PRIMARY = 'btn-primary',
  SECONDARY = 'btn-secondary',
  INFO = 'btn-info',
  ACCENT = 'btn-accent',
  SUCCESS = 'btn-success',
  WARNING = 'btn-warning',
  ERROR = 'btn-error',
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  customClass?: string
  variant?: ButtonVariant
  children: ReactNode
  isLoading?: boolean
  round?: boolean
}
const Button = ({ variant, customClass = '', children, isLoading, round = false, ...rest }: ButtonProps) => {
  return (
    <button
      role="button"
      className={`btn rounded-md ${variant ? variant : ''} ${round ? 'rounded-full' : ''} ${customClass}`}
      {...rest}
    >
      {isLoading ? <Loader /> : children}
    </button>
  )
}

export default Button
