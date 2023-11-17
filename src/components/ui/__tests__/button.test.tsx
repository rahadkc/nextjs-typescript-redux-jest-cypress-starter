/** @jest-environment jsdom */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonVariant } from '../button'
import '@testing-library/jest-dom'

describe('Button Component', () => {
  it('renders with default props', () => {
    const { getByText } = render(<Button onClick={() => {}}>Click Me</Button>)

    const buttonElement = getByText('Click Me')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('btn')
  })

  it('renders with a custom class and the primary variant', () => {
    const { getByText } = render(
      <Button customClass="custom-btn" variant={ButtonVariant.PRIMARY} onClick={() => {}}>
        Click Me
      </Button>
    )

    const buttonElement = getByText('Click Me')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('btn custom-btn btn-primary')
  })

  it('calls the onClick function when clicked', () => {
    const onClickMock = jest.fn()
    const { getByText } = render(<Button onClick={onClickMock}>Click Me</Button>)
    const buttonElement = getByText('Click Me')

    fireEvent.click(buttonElement)

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  it('renders a loading spinner when isLoading is true', () => {
    const { queryByTestId } = render(
      <Button onClick={() => {}} isLoading={true}>
        Click Me
      </Button>
    )

    const loaderElement = queryByTestId('loader')
    expect(loaderElement).toBeInTheDocument()
  })

  it('adds rounded class when round is true', () => {
    const { getByText } = render(
      <Button onClick={() => {}} round={true}>
        Click Me
      </Button>
    )

    const buttonElement = getByText('Click Me')
    expect(buttonElement).toHaveClass('rounded-full')
  })
})
