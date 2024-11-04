import { configureStore } from '@reduxjs/toolkit'
import itemSlice from './item'
import bagSlice from './bag'
import loaderSlice from './loader'

const store = configureStore({reducer:{
    item:itemSlice.reducer,
    bag:bagSlice.reducer,
    loader:loaderSlice.reducer,
}})

export default store