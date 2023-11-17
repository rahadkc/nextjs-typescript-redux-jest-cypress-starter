import { ChangeEvent, InputHTMLAttributes, forwardRef } from 'react'
import { SETTINGS } from '../../../lib/settings'
import FormControl from '../formControl'

type MyComponentProps = InputHTMLAttributes<HTMLSelectElement> & {
  value?: string
  fieldLabel?: string
  className?: string
  options: ReadonlyArray<{ label: string; value: string }>
}

const Select = forwardRef<HTMLSelectElement, MyComponentProps>(function Select(
  { options, fieldLabel, onChange, ...props },
  ref
) {
  const generateSingleOptions = () => {
    return options.map((item: any) => {
      return (
        <option data-testid="option" role="option" key={item.value} value={item.value}>
          {item.label}
        </option>
      )
    })
  }
  return (
    <FormControl fieldLabel={fieldLabel}>
      <select
        data-testid="select"
        role="select"
        onChange={(e: ChangeEvent<HTMLSelectElement>) => {
          if (onChange) {
            onChange(e)
          }
        }}
        {...props}
        ref={ref}
        className={`select select-bordered rounded-md select-${SETTINGS.inputSize} w-full`}
      >
        {generateSingleOptions()}
      </select>
    </FormControl>
  )
})

export default Select
