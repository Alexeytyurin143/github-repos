import { configureStore } from '@reduxjs/toolkit'
import reposReducer from './reposSlice'

export const store = configureStore({
    reducer: {
        repos: reposReducer,
    },
})
