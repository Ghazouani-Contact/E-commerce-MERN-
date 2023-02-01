import { createSlice } from "@reduxjs/toolkit";

const categorieSlice = createSlice({
    name: "categorie",
    initialState: {
        categories: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //getALL
        getCategorieStart: (state) => {
            state.isFetching = true;
            state.error = false
        },
        getCategorieSuccess: (state, action) => {
            state.isFetching = false;
            state.categories = action.payload;
        },
        getCategorieFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //delete
        deleteCategorieStart: (state) => {
            state.isFetching = true;
            state.error = false
        },
        deleteCategorieSuccess: (state, action) => {
            state.isFetching = false;
            state.categories.splice(
                state.categories.findIndex((item) => item._id === action.payload),
                1
            );
        },
        deleteCategorieFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //update
        updateCategorieStart: (state) => {
            state.isFetching = true;
            state.error = false
        },
        updateCategorieSuccess: (state, action) => {
            state.isFetching = false;
            state.categories [
                state.categories.findIndex((item) => item._id === action.payload._id)]= action.payload.categorie;
                 },
        updateCategorieFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //add
        addCategorieStart: (state) => {
            state.isFetching = true;
            state.error = false
        },
        addCategorieSuccess: (state, action) => {
            state.isFetching = false;
            state.categories.push(action.payload)

        },
        addCategorieFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

    },
});

export const { loginStart,
    addCategorieStart,
    addCategorieSuccess,
    addCategorieFailure,
    updateCategorieStart,
    updateCategorieFailure,
    updateCategorieSuccess,
    getCategorieStart,
    getCategorieSuccess,
    getCategorieFailure,
    deleteCategorieStart,
    deleteCategorieSuccess,
    deleteCategorieFailure,
} = categorieSlice.actions;
export default categorieSlice.reducer;