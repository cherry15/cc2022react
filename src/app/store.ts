import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit'
import { showModalSlice } from '../features/modal/modal-slice'
import { employeesApi } from '../features/employee/employees-api'

const rootReducer = combineReducers({
  [employeesApi.reducerPath]: employeesApi.reducer,
  showModal: showModalSlice.reducer
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      // adding the api middleware enables caching, invalidation, polling and other features of `rtk-query`
      getDefaultMiddleware().concat(employeesApi.middleware),
    preloadedState,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
