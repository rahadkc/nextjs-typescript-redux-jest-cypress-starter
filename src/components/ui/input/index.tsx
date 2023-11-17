import { InputHTMLAttributes, forwardRef } from 'react'
import FormControl from '../formControl'
import { SETTINGS } from '../../../lib/settings'

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  fieldLabel?: string
  type?: 'number' | 'text' | 'submit' | 'email' | 'password' | 'reset'
  value?: string
  customClass?: string
  hasError?: boolean
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(function InputField(
  { type = 'text', customClass, hasError, fieldLabel, ...rest },
  ref
) {
  const SIZE = `input-${SETTINGS.inputSize}`

  return (
    <FormControl fieldLabel={fieldLabel}>
      <input
        data-testid="inputfield"
        type={type}
        className={`input input-bordered ${SIZE} rounded-md w-full ${
          hasError ? 'input-error' : ''
        } ${customClass}`}
        {...rest}
        ref={ref}
      />
    </FormControl>
  )
})

export default InputField
