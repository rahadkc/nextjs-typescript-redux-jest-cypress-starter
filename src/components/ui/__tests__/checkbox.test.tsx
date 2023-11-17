/** @jest-environment jsdom */
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Checkbox from '../checkbox'

describe('Checkbox Component', () => {
  const onChangeMock = jest.fn()
  it('renders with a label and placeholder', () => {
    const label = 'I agree to the terms'
    const placeholder = 'Check this box'
    const { getByText, getByPlaceholderText } = render(
      <Checkbox label={label} placeholder={placeholder} onChange={onChangeMock} />
    )

    const labelElement = getByText(label)
    const inputElement = getByPlaceholderText(placeholder)

    expect(labelElement).toBeInTheDocument()
    expect(inputElement).toBeInTheDocument()
  })

  it('renders with a field label', () => {
    const fieldLabel = 'Terms and Conditions'
    const { getByText } = render(<Checkbox fieldLabel={fieldLabel} onChange={onChangeMock} />)

    const fieldLabelElement = getByText(fieldLabel)

    expect(fieldLabelElement).toBeInTheDocument()
  })

  it('calls the onChange function when the checkbox is clicked', () => {
    render(<Checkbox label="Click Me" onChange={onChangeMock} />)

    const checkboxElement = screen.getByRole('checkbox')

    fireEvent.click(checkboxElement)

    expect(onChangeMock).toHaveBeenCalledTimes(1)
  })

  it('renders as checked when the "checked" prop is true', () => {
    render(<Checkbox label="Checked" checked={true} onChange={onChangeMock} />)

    const checkboxElement = screen.getByRole('checkbox')

    expect(checkboxElement).toBeChecked()
  })
})
