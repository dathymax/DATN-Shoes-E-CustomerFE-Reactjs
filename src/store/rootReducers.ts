import { combineReducers } from "@reduxjs/toolkit";
import { AuthSlice } from "./features/auth";
import { ProductSlice } from "./features/products";
import { CartSlice } from "./features/cart";
import { ReviewSlice } from "./features/reviews";

const rootReducer = combineReducers({
    auth: AuthSlice.reducer,
    products: ProductSlice.reducer,
    cart: CartSlice.reducer,
    review: ReviewSlice.reducer,
});

export default rootReducer;
