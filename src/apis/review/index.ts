import Axios_instance from "../../config/axios";
import { IReview } from "../../types";

const url = "/reviews";
const urlCustomer = "/reviews/customer";

export const ReviewApis = {
    createReview: async (values: IReview) => {
        const response = await Axios_instance.post(url, values);
        return response?.data || {};
    },
    getAllReviews: async (productId?: string) => {
        const response = await Axios_instance.get(
            `${urlCustomer}/${productId}`
        );
        return response?.data || {};
    },
};
