import { createSlice } from "@reduxjs/toolkit";

export const initialMenu = {
    modalIsOpen: false
}

export const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        setModalIsOpen: (state, action) => {
            return {
                ...state,
                modalIsOpen: !modalIsOpen
            };
        },
    }
});

