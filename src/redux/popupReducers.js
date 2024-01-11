import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isPopupOpen: false
};

const popupReducers = createSlice({
    name: "popup",

    initialState,

    reducers: {
        togglePopup: (state, action) => {
            console.log("in toggle popup")
            return {
                ...state,
                isPopupOpen: !state.isPopupOpen
            }
        },
    }
})

export const { togglePopup } = popupReducers.actions;
export const popupReducer = popupReducers.reducer;