import { combineReducers } from 'redux'
import themeSlice from './themeSlice'

const rootReducer = combineReducers({
  theme: themeSlice,
})

export default rootReducer
