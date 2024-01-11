import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { api_key } from '../config';

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
        getTopRatedMovies: builder.query({
            query: () => `/movie/top_rated`,
        }),
        getUpcomingMovies: builder.query({
            query: () => `/movie/top_rated`,
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTopRatedMoviesQuery } = moviesApi