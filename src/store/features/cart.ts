import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartState {

}

const initialState: CartState = {

};

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

    },
});

export default CartSlice.reducer;
export const { } = CartSlice.actions;