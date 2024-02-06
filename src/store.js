import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './redux/dataSlice'
import searchSlice from './redux/searchReducer'
import filterSlice from './redux/filterReducer'

export const store = configureStore({
  reducer: {
    instanceList: dataReducer,
    [searchSlice.name]: searchSlice.reducer,
    [filterSlice.name]: filterSlice.reducer,
  }
})