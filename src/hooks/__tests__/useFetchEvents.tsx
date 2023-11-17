/** @jest-environment jsdom */

import { renderHook } from '@testing-library/react'
import useFetchEvents from '../actions/useFetchEvents'

// Create a mock function for useAppDispatch
const mockDispatch = jest.fn()

const mockData = [
  {
    title: 'event title',
    start: '2023-09-28T12:00:00.000Z',
    end: '2023-09-28T12:00:00.000Z',
    recurring: 'none',
  },
]

// Mock the dependencies and SWR
jest.mock('swr', () => {
  return jest.fn(() => ({
    data: mockData,
    error: null,
    isValidating: false,
    isLoading: false,
    mutate: jest.fn(),
  }))
})

jest.mock('../../redux/hook', () => {
  return {
    useAppDispatch: () => mockDispatch,
  }
})

// Write your test
test('useFetchEvents hook fetches events correctly', () => {
  // Set a mock date
  const mockDate = new Date('2023-09-27T12:00:00.000Z')

  // Render the hook with custom properties
  const { result } = renderHook(() => useFetchEvents({ date: mockDate }))

  // Verify the result
  expect(result.current.events).toEqual(mockData)
  expect(result.current.eventsError).toBeNull()
  expect(result.current.isEventsLoading).toBe(false)
  expect(result.current.isValidating).toBe(false)
  //   expect(result.current.mutate).toBeInstanceOf(Function)

  // Ensure dispatch was called as expected
  //   expect(mockDispatch).toHaveBeenCalledWith(/* your expected action here */)
})
