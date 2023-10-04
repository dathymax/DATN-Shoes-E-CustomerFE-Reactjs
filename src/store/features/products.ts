import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types";

interface ProductState {
    items: IProduct[];
    item: IProduct;
}

const initialState: ProductState = {
    items: [],
    item: {},
};

export const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setAllProduct: (state, action: PayloadAction<IProduct[]>) => {
            state.items = action.payload
        },
        setProduct: (state, action: PayloadAction<IProduct>) => {
            state.item = action.payload
        },
    },
});

export default ProductSlice.reducer;
export const { setAllProduct, setProduct } = ProductSlice.actions;