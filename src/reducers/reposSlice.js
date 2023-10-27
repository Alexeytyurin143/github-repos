import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	searchQuery: '',
	currentPage: 1,
	perPage: 10,
}

export const reposSlice = createSlice({
	name: 'repos',
	initialState,
	reducers: {
		setSearchQuery(state, action) {
			state.searchQuery = action.payload
		},
		setCurrentPage(state, action) {
			state.currentPage = action.payload
		},
	},
})

export const { setSearchQuery, setCurrentPage } = reposSlice.actions

export default reposSlice.reducer
