import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
        price:0,
        
    },
    reducers: {
        addProduct: (state, action) => {
            let index = state.products.findIndex((item) => item._id === action.payload._id)
            
            if (index === -1) {
                state.products.push(action.payload);
                state.quantity += 1;
            } else {
                state.products[index].quantity += action.payload.quantity
            }

            state.total += action.payload.price * action.payload.quantity;
        },
        //delete
        deleteCartStart: (state) => {
            state.isFetching = true;
            state.error = false
        },
        deleteCartSuccess: (state, action) => {
            
         state.isFetching = false;
         state.quantity -= 1;
         state.total -= action.payload.price * action.payload.quantity;     
         state.products.splice( state.products.findIndex((item) => item._id === action.payload._id),
                1
            ); 
        },
        deleteCartFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        reset: (state) => {
           state.price = 0
           state.quantity = 0
           state.products = []
           state.total = 0 
        }
      
    },
});

export const { addProduct,deleteCartFailure,deleteCartStart,deleteCartSuccess, reset } = cartSlice.actions;
export default cartSlice.reducer;