import { createSlice } from "@reduxjs/toolkit";

const newsletterSlice = createSlice({
    name: "newsletter",
    initialState: {
        newsletters: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //getALL
        getNewsletterStart: (state) => {
            state.isFetching = true;
            state.error = false
        },
        getNewsletterSuccess: (state, action) => {
            state.isFetching = false;
            state.newsletters = action.payload;
        },
        getNewsletterFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //delete
        deleteNewsletterStart: (state) => {
            state.isFetching = true;
            state.error = false
        },
        deleteNewsletterSuccess: (state, action) => {
            state.isFetching = false;
            state.newsletters.splice(
                state.newsletters.findIndex((item) => item._id === action.payload),
                1
            );
        },
        deleteNewsletterFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    

    },
});

export const { loginStart,
    getNewsletterStart,
    getNewsletterSuccess,
    getNewsletterFailure,
    deleteNewsletterStart,
    deleteNewsletterSuccess,
    deleteNewsletterFailure,
} = newsletterSlice.actions;
export default newsletterSlice.reducer;