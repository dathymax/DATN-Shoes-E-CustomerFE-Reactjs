import Axios_instance from "../../config/axios";
import { IAddressShipping } from "../../types";

const url = "/address-shipping";

export const AddressShippingApis = {
    createAddressShipping: async function (values?: IAddressShipping) {
        const response = await Axios_instance.post(url, values);
        return response?.data || {}
    },
    getAddressShippingByUserId: async function (userId?: string) {
        const response = await Axios_instance.get(`${url}/${userId}`);
        return response?.data || {}
    },
    getAddressById: async function (addressId?: string) {
        const response = await Axios_instance.get(`${url}/${addressId}`);
        return response?.data || {}
    },
    updateAddressShipping: async function (id?: string, values?: IAddressShipping) {
        const response = await Axios_instance.patch(`${url}/${id}`, values);
        return response?.data || {}
    },
    deleteAddressShippingById: async function (id?: string) {
        const response = await Axios_instance.delete(`${url}/${id}`);
        return response?.data || {}
    }
}