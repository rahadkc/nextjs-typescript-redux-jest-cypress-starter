import { ChangeEvent, forwardRef } from 'react'
import { SETTINGS } from '../../../lib/settings'
import FormControl from '../formControl'

type DateTimePickerProps = {
  value?: string
  defaultValue?: string
  fieldLabel?: string
  className?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  min?: string
  hasError?: boolean
}

const DateTimePicker = forwardRef<HTMLInputElement, DateTimePickerProps>(function DateTimePicker(
  { fieldLabel, onChange, min, hasError, defaultValue, ...rest },
  ref
) {
  const localDate = defaultValue?.toLocaleString()

  return (
    <FormControl fieldLabel={fieldLabel}>
      <input
        data-testid="datetimepicker"
        type="datetime-local"
        className={`input input-bordered rounded-md input-${SETTINGS.inputSize} ${
          hasError ? 'input-error' : ''
        } w-full`}
        defaultValue={localDate}
        {...(onChange && { onChange: onChange })}
        {...(min && { min })}
        {...rest}
        ref={ref}
      />
    </FormControl>
  )
})

export default DateTimePicker
