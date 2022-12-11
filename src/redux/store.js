import { configureStore } from '@reduxjs/toolkit';
import { adminReducer } from './reducers/adminReducer.js';
import { cartReducer } from './reducers/cartReducer.js';
import { orderReducer, ordersReducer } from './reducers/orderReducer.js';
import { authReducer, contactReducer } from './reducers/userReducer';

const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        order: orderReducer,
        orders: ordersReducer,
        admin: adminReducer,
        contact: contactReducer
    }
});

export default store;

export const server = "https://btech-burger-wala-server.onrender.com/api/v1";
