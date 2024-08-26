import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    totalItems: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        addToCart: (state, action) => {
            const existingProduct = state.products.find(
                (product) => product.id === action.payload.id
            );
            if (existingProduct) {
                existingProduct.quantity += 1;
                existingProduct.totalPrice += action.payload.price;
            } else {
                state.products.push({
                    ...action.payload,
                    quantity: 1,
                    totalPrice: action.payload.price,
                });
            }
            state.totalItems += 1;
        },

        removeFromCart: (state, action) => {
            state.products = state.products.filter(
                (product) => product.id !== action.payload
            );
        },

        clearCart: (state) => {
            state.products = [];
        },

        increaseItem: (state, action) => {
            const product = state.products.find(
                (product) => product.id === action.payload
            );
            if (product) {
                product.quantity += 1;
                product.totalPrice = product.price * product.quantity
            }
        },

        decreaseItem: (state, action) => {
            const product = state.products.find(
                (product) => product.id === action.payload
            );

            if (product && product.quantity > 1) {
                product.quantity -= 1;
                product.totalPrice = product.price * product.quantity
            }
        }
    },
});

export const { addToCart, removeFromCart, clearCart, increaseItem, decreaseItem } = cartSlice.actions;
export default cartSlice.reducer;
