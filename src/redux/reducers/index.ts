import { combineReducers } from 'redux'
import eventsSlice from './events/eventsSlice'

const rootReducer = combineReducers({
  eventsData: eventsSlice,
})

export default rootReducer
