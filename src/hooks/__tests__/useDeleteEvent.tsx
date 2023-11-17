/** @jest-environment jsdom */
import { renderHook } from '@testing-library/react'
import useCreateEvent from '../actions/useCreateEvent'

describe('useDeleteEvent', () => {
  it('should render with error undefined', () => {
    const { result } = renderHook(useCreateEvent)
    const { trigger, isMutating, error } = result.current

    expect(typeof trigger).toBe('function')
    expect(typeof isMutating).toBe('boolean')
    expect(error).toBeUndefined()
  })
})
