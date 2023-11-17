import { RECURRING_TYPE } from '../../lib/constants'
import { setEventData, setEvents, setEventPage } from '../reducers/events/eventsSlice'
import { store } from '../store'

describe('eventsSlice', () => {
  it('should set event data correctly', () => {
    const eventData = { start: new Date() }
    store.dispatch(setEventData(eventData))

    const state = store.getState().eventsData
    expect(state.event).toEqual(eventData)
  })

  it('should set events correctly', () => {
    const events = [
      { title: 'Event 1', start: new Date(), recurring: RECURRING_TYPE.NONE },
      { title: 'Event 2', start: new Date(), recurring: RECURRING_TYPE.WEEKLY },
    ]
    store.dispatch(setEvents(events))

    const state = store.getState().eventsData
    expect(state.events).toEqual(events)
  })

  it('should set event page correctly', () => {
    const eventPage = new Date()
    store.dispatch(setEventPage(eventPage))

    const state = store.getState().eventsData
    expect(state.eventPage).toEqual(eventPage)
  })
})
