import Axios_instance from "../../config/axios";

const url = "/promo-code";

export const PromoCodeApis = {
    getAll: async function () {
        const response = await Axios_instance.get(url);
        return response?.data || [];
    },
    getById: async function (id?: string) {
        const response = await Axios_instance.get(`${url}/${id}`);
        return response?.data || {};
    },
};
