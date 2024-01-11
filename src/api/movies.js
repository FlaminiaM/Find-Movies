import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3',
        prepareHeaders: (headers, { getState }) => {
            headers.set(
                'Authorization',
                `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NjAwYzFjYTRlYWI0MzRkZjdmNWRmYTY5M2ZjYWQyMyIsInN1YiI6IjY1OTdlOTQ5NzI2ZmIxMDIwZWFiMjhiMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.snbME917q4u2bNVw7w0oHdnyu_KzRW4Y0fdX9lZ-ALk`
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