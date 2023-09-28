import Axios_instance from "../../config/axios";
import { IUser } from "../../types";

const url = "/users";

export async function createUser(values: IUser) {
    const response = await Axios_instance.post(url, values);

    return response || {};
}

export async function updateUser(id: string, values: IUser) {
    const response = await Axios_instance.patch(`${url}/${id}`, values);

    return response || {};
}

export async function getUserById(id: string) {
    const response = await Axios_instance.get(`${url}/${id}`);

    return response || {};
}