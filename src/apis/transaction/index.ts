import Axios_instance from "../../config/axios";
import { ITransaction } from "../../types";

const url = "/transactions";

export const TransactionApis = {
    getAll: async function () {
        const response = await Axios_instance.get(url);
        return response?.data || [];
    },
    getAllByUserId: async function (userId?: string) {
        const response = await Axios_instance.get(`${url}/${userId}`);
        return response?.data || [];
    },
    getAllReturnsByUserId: async function (userId?: string) {
        const response = await Axios_instance.get(`${url}/returns/${userId}`);
        return response?.data || [];
    },
    getById: async function (id?: string) {
        const response = await Axios_instance.get(`${url}/${id}`);
        return response?.data || {};
    },
    create: async function (values?: ITransaction) {
        const response = await Axios_instance.post(url, values);
        return response?.data || {};
    },
    update: async function (
        id?: string,
        transactionExt?: string,
        values?: ITransaction
    ) {
        const response = await Axios_instance.patch(
            `${url}/${id}/${transactionExt}`,
            values
        );
        return response?.data || {};
    },
    delete: async function (id?: string, transactionExt?: string) {
        const response = await Axios_instance.delete(
            `${url}/${id}/${transactionExt}`
        );
        return response?.data || {};
    },
    updateTransactionById: async function (id?: string, values?: ITransaction) {
        const response = await Axios_instance.patch(`${url}/${id}`, values);
        return response?.data || {};
    },
};
