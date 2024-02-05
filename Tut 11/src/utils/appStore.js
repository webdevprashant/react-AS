import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice';

// Create Redux store - Step 1
const appStore = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default appStore;