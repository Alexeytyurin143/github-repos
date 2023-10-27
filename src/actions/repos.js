import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const reposApi = createApi({
	reducerPath: 'reposApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.github.com/',
		prepareHeaders: (headers) => {
			headers.set('Authorization', 'Bearer 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')
			headers.set('X-GitHub-Api-Version', '2022-11-28')
			return headers
		},
	}),
	endpoints: (builder) => ({
		getRepos: builder.query(
			{
				query: ({ searchQuery, currentPage }) => {
					if (!searchQuery) {
						searchQuery = 'stars:>1'
					}
					return `search/repositories?q=${searchQuery}&sort=stars&per_page=10&page=${currentPage}`
				},
			},
			Headers
		),
	}),
})

export const { useGetReposQuery } = reposApi
