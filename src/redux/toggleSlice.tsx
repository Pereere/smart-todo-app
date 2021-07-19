import { createSlice } from "@reduxjs/toolkit";



export const toggleSlice = createSlice({
    name: "toggle",

    initialState: true,

    reducers: {
        toggleSearch: (state: boolean) => {
            state = !state;
            return state;
        },
    },
});

export const {toggleSearch} = toggleSlice.actions;
export default toggleSlice.reducer;