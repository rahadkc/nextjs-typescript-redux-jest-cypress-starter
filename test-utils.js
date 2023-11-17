import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './src/redux/reducers'

// Create a custom render function that includes the Redux store and any other provider components.
function customRender(
  ui,
  {
    initialState,
    store = configureStore({
      reducer: rootReducer,
      preloadedState: initialState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions })
}

// Export your custom render function for use in your tests.
export * from '@testing-library/react' // Re-export all react-testing-library functions
export { customRender as render } // Export your custom render function
