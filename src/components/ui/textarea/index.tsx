import { forwardRef } from 'react'
import FormControl from '../formControl'

type TextareaProps = {
  fieldLabel?: string
  value?: string
  customClass?: string
  placeholder?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { customClass, placeholder = 'textarea', fieldLabel, ...rest },
  ref
) {
  return (
    <FormControl fieldLabel={fieldLabel}>
      <textarea
        className="textarea textarea-bordered rounded-md"
        placeholder={placeholder}
        {...rest}
        ref={ref}
      />
    </FormControl>
  )
})

export default Textarea
