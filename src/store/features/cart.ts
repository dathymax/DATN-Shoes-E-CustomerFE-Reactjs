import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types";
import { RootState } from "../store";

export interface CartItem {
    product: IProduct;
    quantity: number | string;
    color: string;
    size: number | string;
    totalPricePerItem: number;
}

interface CartState {
    items: CartItem[];
    promoCodes?: string[];
    paymentMethod?: string;
}

const initialState: CartState = {
    items: [],
    promoCodes: [],
    paymentMethod: "cash",
};

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            state.items?.push(action.payload);
        },
        removeFromCart: (state, action: PayloadAction<{ index: number }>) => {
            state.items?.splice(action.payload.index, 1);
        },
        removeCart: (state) => {
            state.items = [];
        },
        addPromoCodes: (state, action: PayloadAction<string[]>) => {
            state.promoCodes = action.payload;
        },
        setPaymentMethod: (
            state,
            action: PayloadAction<{ method: string }>
        ) => {
            state.paymentMethod = action.payload.method;
        },
    },
});

export default CartSlice.reducer;
export const {
    addToCart,
    removeFromCart,
    removeCart,
    setPaymentMethod,
    addPromoCodes,
} = CartSlice.actions;

const items = (state: RootState) => state.cart.items;

export const totalPriceSelector = createSelector([items], (items) => {
    const total = items.reduce(
        (total: number, curr: CartItem) => (total += curr.totalPricePerItem),
        0
    );
    return total;
});
