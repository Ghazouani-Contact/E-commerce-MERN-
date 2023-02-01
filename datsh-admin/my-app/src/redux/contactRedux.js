import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name: "contact",
    initialState: {
        contacts: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //getALL
        getcontactStart: (state) => {
            state.isFetching = true;
            state.error = false
        },
        getcontactSuccess: (state, action) => {
            state.isFetching = false;
            state.contacts = action.payload;
        },
        getcontactFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //delete
        deletecontactStart: (state) => {
            state.isFetching = true;
            state.error = false
        },
        deletecontactSuccess: (state, action) => {
            state.isFetching = false;
            state.contacts.splice(
                state.contacts.findIndex((item) => item._id === action.payload),
                1
            );
        },
        deletecontactFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    

    },
});

export const { loginStart,
    getcontactStart,
    getcontactSuccess,
    getcontactFailure,
    deletecontactStart,
    deletecontactSuccess,
    deletecontactFailure,
} = contactSlice.actions;
export default contactSlice.reducer;