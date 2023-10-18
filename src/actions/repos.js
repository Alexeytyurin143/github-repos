import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const reposApi = createApi({
	reducerPath: 'reposApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com/' }),
	endpoints: (builder) => ({
		getRepos: builder.query({
			query: (searchQuery = 'stars:>1') => {
				if (!searchQuery) {
					searchQuery = 'stars:>1'
				}
				return `search/repositories?q=${searchQuery}&sort=stars`
			},
		}),
	}),
})

export const { useGetReposQuery } = reposApi
