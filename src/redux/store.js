import cartReducer from './actions/slice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});