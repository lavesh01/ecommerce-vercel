import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
        name:"cart",
        initialState:{
            products:[],
            quantity:0,
            total: 0,
        },
        reducers:{
            addProduct: (state, action) => {
                const newProduct = action.payload;
                const existingProductIndex = state.products.findIndex(product => product._id === newProduct._id);
    
                if (existingProductIndex !== -1) {
                    state.products[existingProductIndex].quantity += newProduct.quantity;
                } else {
                    state.products.push(newProduct);
                }
    
                state.quantity += newProduct.quantity;
                state.total += newProduct.price * newProduct.quantity;
            },
            removeProduct: (state, action) => {
                const indexToRemove = action.payload;
                const productToRemove = state.products[indexToRemove];
                state.quantity -= productToRemove.quantity;
                state.total -= productToRemove.price * productToRemove.quantity;
                state.products.splice(indexToRemove, 1);
            },
            clearCart: (state) => {
                state.products = [];
                state.quantity = 0;
                state.total = 0;
            },
        },

});

export const { addProduct, clearCart, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;