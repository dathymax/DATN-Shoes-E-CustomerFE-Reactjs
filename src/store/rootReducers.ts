import { combineReducers } from "@reduxjs/toolkit";
import { AuthSlice } from "./features/auth";
import { ProductSlice } from "./features/products";

const rootReducer = combineReducers({
    auth: AuthSlice.reducer,
    products: ProductSlice.reducer,
});

export default rootReducer;