import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    // totalItems: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {
        addToCart(state, action) {
            const { productId, quantity } = action.payload;
            const indexId = (state.products).findIndex(item => item.product, productId);

            if (indexId >= 0) {
                state.products[indexId].quantity += quantity;
            } else {
                state.products.push({productId: productId, quantity: quantity});
            }
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
