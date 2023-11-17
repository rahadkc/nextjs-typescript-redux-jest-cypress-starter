/** @jest-environment jsdom */

import { renderHook } from '@testing-library/react'
import useURLParams from '../useURLParams'

describe('useURLParams', () => {
  it('should parse URL parameters correctly', () => {
    // Define a sample URL with query parameters
    window.history.pushState({}, '', '/?name=John&age=30&date=2023-01-15T00:00:00Z')

    const { result } = renderHook(useURLParams)

    const paramsToExtract = ['name', 'age', 'date']

    // Extract parameters
    const queryParams = result.current.getParams(paramsToExtract, ['date'])

    // Verify the extracted parameters
    expect(queryParams).toEqual({
      name: 'John',
      age: '30',
      date: new Date('2023-01-15T00:00:00Z'.slice(0, -1)),
    })
  })
})
