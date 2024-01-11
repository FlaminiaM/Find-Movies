import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { moviesApi } from '../api/movies';

import { popupReducer } from "./popupReducers";

const store = configureStore({
    reducer: {
        popupReducer,
        [moviesApi.reducerPath]: moviesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
});

export default store;