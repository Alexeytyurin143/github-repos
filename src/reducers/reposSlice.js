import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
    isFetching: true,
}

export const reposSlice = createSlice({
    name: 'repos',
    initialState,
    reducers: {
        setRepos(state, action) {
            state.items = action.payload
        },
    },
})

export const { setRepos } = reposSlice.actions

export default reposSlice.reducer
