import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface PaymentState {
    paymentMethod: string
}

const initialState: PaymentState = {
    paymentMethod: "cash"
};

export const PaymentSlice = createSlice({
    name: "payment",
    initialState,
    reducers: {
        setPaymentMethod: (state, action: PayloadAction<{ method: string }>) => {
            state.paymentMethod = action.payload.method;
        },
    },
});

export default PaymentSlice.reducer;
export const { setPaymentMethod } = PaymentSlice.actions;