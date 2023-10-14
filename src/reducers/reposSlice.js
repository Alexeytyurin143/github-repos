import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0,
}

export const reposSlice = createSlice({
    name: 'repos',
    initialState,
    reducers: {
        setCount: (state, action) => {
            state.count += action.payload
        },
    },
})

export const { setCount } = reposSlice.actions

export default reposSlice.reducer
