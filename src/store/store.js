import { configureStore } from '@reduxjs/toolkit'
import { sliceRoot } from './slice'

export const store = configureStore({
    reducer: sliceRoot,
})