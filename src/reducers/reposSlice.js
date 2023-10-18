import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	searchQuery: '',
}

export const reposSlice = createSlice({
	name: 'repos',
	initialState,
	reducers: {
		setSearchQuery(state, action) {
			state.searchQuery = action.payload
		},
	},
})

export const { setSearchQuery } = reposSlice.actions

export default reposSlice.reducer
