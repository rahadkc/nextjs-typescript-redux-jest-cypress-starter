/** @jest-environment jsdom */
import React from 'react'
import { render } from '@testing-library/react'
import BooleanWrapper from '../booleanWrapper'

describe('BooleanWrapper Component', () => {
  it('renders children when shouldRender is true', () => {
    const { getByText, queryByText } = render(
      <BooleanWrapper shouldRender={true}>
        <div>Rendered Content</div>
      </BooleanWrapper>
    )

    // Expect the child content to be in the document
    expect(getByText('Rendered Content')).toBeInTheDocument()

    // Expect the child content to be present and not empty
    expect(queryByText('Rendered Content')).not.toBeNull()
  })

  it('does not render children when shouldRender is false', () => {
    const { queryByText } = render(
      <BooleanWrapper shouldRender={false}>
        <div>Rendered Content</div>
      </BooleanWrapper>
    )

    // Expect the child content to be absent in the document
    expect(queryByText('Rendered Content')).toBeNull()
  })
})
