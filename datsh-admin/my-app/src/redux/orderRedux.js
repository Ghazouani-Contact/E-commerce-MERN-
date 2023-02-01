import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "order",
    initialState: {
        orders: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //getALL
        getOrderStart: (state) => {
            state.isFetching = true;
            state.error = false
        },
        getOrderSuccess: (state, action) => {
            state.isFetching = false;
            state.orders = action.payload;
        },
        getOrderFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        //delete
        deleteOrderStart: (state) => {
            state.isFetching = true;
            state.error = false
        },
        deleteOrderSuccess: (state, action) => {
            state.isFetching = false;
            state.orders.splice(
                state.orders.findIndex((item) => item._id === action.payload),
                1
            );
        },
        deleteOrderFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

    },
});

export const { loginStart,
    getOrderStart,
    getOrderSuccess,
    getOrderFailure,
    deleteOrderStart,
    deleteOrderSuccess,
    deleteOrderFailure,
} = orderSlice.actions;
export default orderSlice.reducer;