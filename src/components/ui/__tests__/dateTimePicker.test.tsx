/** @jest-environment jsdom */
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import DateTimePicker from '../dateTimePicker'

describe('DateTimePicker Component', () => {
  it('renders with a field label', () => {
    const fieldLabel = 'Event Date'
    const { getByText } = render(<DateTimePicker fieldLabel={fieldLabel} />)

    const fieldLabelElement = getByText(fieldLabel)

    expect(fieldLabelElement).toBeInTheDocument()
  })

  it('calls the onChange function when the input value changes', () => {
    const onChangeMock = jest.fn()
    render(<DateTimePicker onChange={onChangeMock} />)

    const inputElement = screen.getByTestId('datetimepicker')

    fireEvent.change(inputElement, { target: { value: '2023-09-30T12:00' } })

    expect(onChangeMock).toHaveBeenCalledTimes(1)
  })

  it('adds the "input-error" class when hasError is true', () => {
    render(<DateTimePicker hasError={true} />)

    const inputElement = screen.getByTestId('datetimepicker')

    expect(inputElement).toHaveClass('input-error')
  })

  it('sets the "min" attribute when provided', () => {
    const minDate = '2023-09-29T00:00'
    render(<DateTimePicker min={minDate} />)

    const inputElement = screen.getByTestId('datetimepicker')

    expect(inputElement).toHaveAttribute('min', minDate)
  })
})
