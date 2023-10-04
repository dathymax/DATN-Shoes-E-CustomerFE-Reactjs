import Axios_instance from "../../config/axios";
import { IProduct } from "../../types";

const url = "/shoes";
const urlCustomer = "/shoes/customer";

export const ProductApis = {
    getAllProducts: async () => {
        const response = await Axios_instance.get(urlCustomer);
        return response?.data || [];
    },
    getProductById: async (id?: string) => {
        const response = await Axios_instance.get(`${urlCustomer}/${id}`);
        return response?.data || {};
    },
    createProduct: async (values: IProduct) => {
        const response = await Axios_instance.post(url, values);
        return response?.data || {};
    },
    updateProductById: async (id?: string, values?: IProduct) => {
        const response = await Axios_instance.patch(`${url}/${id}`, values);
        return response?.data || {};
    },
};
