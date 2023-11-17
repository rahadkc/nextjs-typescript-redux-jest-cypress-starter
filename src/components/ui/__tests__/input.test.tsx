/** @jest-environment jsdom */
import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import InputField from '../input'

describe('InputField Component', () => {
  it('renders an input field with default type "text"', () => {
    const { container } = render(<InputField />)
    const inputElement = screen.getByTestId('inputfield')

    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveAttribute('type', 'text')
  })

  it('renders a field label when provided', () => {
    const labelText = 'Field Label'
    const { getByText } = render(<InputField fieldLabel={labelText} />)
    const labelElement = getByText(labelText)

    expect(labelElement).toBeInTheDocument()
  })

  it('calls the onChange function when the input value changes', () => {
    const onChangeMock = jest.fn()
    render(<InputField onChange={onChangeMock} />)
    const inputElement = screen.getByTestId('inputfield')

    fireEvent.change(inputElement, { target: { value: 'New Value' } })

    expect(onChangeMock).toHaveBeenCalledTimes(1)
  })

  it('adds the "input-error" class when hasError is true', () => {
    const { container } = render(<InputField hasError={true} />)
    const inputElement = screen.getByTestId('inputfield')

    expect(inputElement).toHaveClass('input-error')
  })

  it('applies the custom class when provided', () => {
    const customClass = 'custom-input'
    const { container } = render(<InputField customClass={customClass} />)
    const inputElement = screen.getByTestId('inputfield')

    expect(inputElement).toHaveClass(customClass)
  })
})
