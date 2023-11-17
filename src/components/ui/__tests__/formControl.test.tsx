/** @jest-environment jsdom */

import React from 'react'
import { render } from '@testing-library/react'
import FormControl from '../formControl'

describe('FormControl Component', () => {
  it('renders children content', () => {
    const labelText = 'Field Label'
    const { getByText } = render(<FormControl>{labelText}</FormControl>)

    const labelElement = getByText(labelText)

    expect(labelElement).toBeInTheDocument()
  })

  it('renders a field label when provided', () => {
    const labelText = 'Field Label'
    const { getByText } = render(<FormControl fieldLabel={labelText}>Content</FormControl>)

    const labelElement = getByText(labelText)

    expect(labelElement).toBeInTheDocument()
  })

  it('renders helper text when provided', () => {
    const helperText = 'This is a helper message.'
    const { getByText } = render(<FormControl helperText={helperText}>Content</FormControl>)

    const helperTextElement = getByText(helperText)

    expect(helperTextElement).toBeInTheDocument()
  })

  it('applies the "form-control" class', () => {
    const { container } = render(<FormControl>Content</FormControl>)

    expect(container.firstChild).toHaveClass('form-control')
  })

  it('applies the "text-error" class to helper text', () => {
    const helperText = 'This is an error message.'
    const { getByText } = render(<FormControl helperText={helperText}>Content</FormControl>)

    const helperTextElement = getByText(helperText)

    expect(helperTextElement).toHaveClass('text-error')
  })
})
