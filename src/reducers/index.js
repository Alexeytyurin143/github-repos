import { configureStore } from '@reduxjs/toolkit'
import reposReducer from './reposSlice'
import { reposApi } from '../actions/repos'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        repos: reposReducer,
        [reposApi.reducerPath]: reposApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reposApi.middleware),
})

setupListeners(store.dispatch)
