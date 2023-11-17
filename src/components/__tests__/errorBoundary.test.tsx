/** @jest-environment jsdom */
import React from 'react'
import { render } from '../../../test-utils'
import { screen, waitFor } from '@testing-library/react'
import ErrorBoundary from '../errorBoundary'

const Child = () => {
  throw new Error('error in error')
}
describe('ErrorBoundary Component', () => {
  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Child Component</div>
      </ErrorBoundary>
    )

    // Expect the child content to be in the document
    expect(screen.getByText('Child Component')).toBeInTheDocument()
  })

  it('async component should throw', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => null)

    render(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>
    )

    await waitFor(() => {
      expect(screen.getByText('Oops, something is wrong!')).toBeDefined()
    })
  })

  //   it('should render error boundary component when there is an error', () => {
  //     const { getByText } = renderProviders(
  //       <ErrorBoundary>
  //         <Child />
  //       </ErrorBoundary>
  //     )
  //     const errorMessage = getByText('Oops, something is wrong!')
  //     expect(errorMessage).toBeDefined()
  //   })
})
