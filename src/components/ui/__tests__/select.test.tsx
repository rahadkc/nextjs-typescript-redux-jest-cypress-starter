/** @jest-environment jsdom */
import React from 'react'
import { render, screen } from '@testing-library/react'
import Select from '../select'

describe('Select Component', () => {
  const data = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ]

  it('renders select options', () => {
    render(<Select options={data} />)

    data.forEach(option => {
      const optionElement = screen.getByText(option.label)
      expect(optionElement).toBeInTheDocument()
    })
  })

  it('applies the provided field label', () => {
    const fieldLabel = 'Select an option:'
    render(<Select options={data} fieldLabel={fieldLabel} />)
    const fieldLabelElement = screen.getByText(fieldLabel)

    expect(fieldLabelElement).toBeInTheDocument()
  })
})
