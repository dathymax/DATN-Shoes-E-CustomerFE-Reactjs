import Axios_instance from "../../config/axios";
import { IUser } from "../../types";

const url = "/auth";

export async function login(values: IUser) {
    const response = await Axios_instance.post(url, values);

    return response?.data || {}
}