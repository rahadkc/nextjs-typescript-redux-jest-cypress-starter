/** @jest-environment jsdom */
import React from 'react'
import { render, screen } from '@testing-library/react'
import Textarea from '../textarea'

describe('Textarea Component', () => {
  it('renders with a placeholder', () => {
    const placeholderText = 'Enter text here'
    render(<Textarea placeholder={placeholderText} />)

    const textareaElement = screen.getByPlaceholderText(placeholderText)
    expect(textareaElement).toBeInTheDocument()
  })

  it('applies the provided field label', () => {
    const fieldLabel = 'Comments:'
    render(<Textarea fieldLabel={fieldLabel} />)
    const fieldLabelElement = screen.getByText(fieldLabel)

    expect(fieldLabelElement).toBeInTheDocument()
  })

  it('handles user input', () => {
    render(<Textarea />)
    const textareaElement: HTMLTextAreaElement = screen.getByRole('textbox')

    const userInput = 'This is a test comment.'
    textareaElement.value = userInput
    expect(textareaElement).toHaveValue(userInput)
  })
})
