import { combineReducers } from "@reduxjs/toolkit";
import { AuthSlice } from "./features/auth";
import { ProductSlice } from "./features/products";
import { CartSlice } from "./features/cart";
import { PaymentSlice } from "./features/payment";

const rootReducer = combineReducers({
    auth: AuthSlice.reducer,
    products: ProductSlice.reducer,
    cart: CartSlice.reducer,
    payment: PaymentSlice.reducer,
});

export default rootReducer;