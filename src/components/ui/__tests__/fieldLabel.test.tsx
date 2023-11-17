/** @jest-environment jsdom */
import React from 'react'
import { render } from '@testing-library/react'
import FieldLabel from '../fieldLabel'

describe('FieldLabel Component', () => {
  it('renders with children content', () => {
    const labelText = 'Field Label'
    const { getByText } = render(<FieldLabel>{labelText}</FieldLabel>)

    const labelElement = getByText(labelText)

    expect(labelElement).toBeInTheDocument()
  })

  it('applies the "font-bold" and "mb-2" classes', () => {
    const labelText = 'Field Label'
    const { getByText } = render(<FieldLabel>{labelText}</FieldLabel>)

    const labelElement = getByText(labelText)

    expect(labelElement).toHaveClass('font-bold')
    expect(labelElement).toHaveClass('mb-2')
  })
})
