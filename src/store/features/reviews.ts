import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IReview } from "../../types";

interface ReviewState {
    items: IReview[];
    item: IReview;
}

const initialState: ReviewState = {
    items: [],
    item: {},
};

export const ReviewSlice = createSlice({
    name: "review",
    initialState,
    reducers: {
        setAllReviews: (state, action: PayloadAction<IReview[]>) => {
            state.items = action.payload;
        },
    },
});

export default ReviewSlice.reducer;
export const { setAllReviews } = ReviewSlice.actions;
