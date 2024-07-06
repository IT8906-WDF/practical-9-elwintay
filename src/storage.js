import { configureStore } from '@reduxjs/toolkit'
import recordsReducer from './recordSlice.js'

export default configureStore({
    reducer: {
        // Register reducers here
        record: recordsReducer
    }
})