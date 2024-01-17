import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const api_key = process.env.REACT_APP_API_KEY

export const moviesApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3',
        prepareHeaders: (headers, { getState }) => {
            headers.set(
                'Authorization',
                api_key
            );
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopRated: builder.query({
            query: (type) => type === 'movies' ? `/movie/top_rated?language=en-US` : `/tv/top_rated?language=en-US`,
        }),
        getUpcomingMovies: builder.query({
            query: () => `/movie/upcoming?language=en-US`,
        }),
        searchMulti: builder.query({
            query: (searchText) => `/search/multi?query=${searchText}&page=1&language=en-US`
        }),
        getDetails: builder.query({
            query: (params) => params.type === 'movie' ? `/movie/${params.id}` : `/tv/${params.id}`
        }),
        getCredits: builder.query({
            query: (params) => params.type=== 'movie' ? `/movie/${params.id}/credits` : `/tv/${params.id}/credits`
        }),
        getWatchProviders: builder.query({
            query: (params) => params.type=== 'movie' ? `/movie/${params.id}/watch/providers` : `/tv/${params.id}/watch/providers`
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTopRatedQuery, 
                useGetUpcomingMoviesQuery, 
                useSearchMultiQuery, 
                useGetDetailsQuery, 
                useGetCreditsQuery,
                useGetWatchProvidersQuery } = moviesApi