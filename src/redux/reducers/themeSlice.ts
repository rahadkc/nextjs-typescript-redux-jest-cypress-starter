import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { THEME } from '../../lib/enums'
import { RootState } from '../store'

interface InitialState {
  theme: THEME
}

const initialState = { theme: THEME.LIGHT } as InitialState

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<THEME>) {
      state.theme = action.payload
    },
  },
})

export const { changeTheme } = themeSlice.actions
export const selectTheme = (state: RootState) => state.theme.theme

export default themeSlice.reducer
