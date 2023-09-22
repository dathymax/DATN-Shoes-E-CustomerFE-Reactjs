import Axios_instance from "../../config/axios";
import { IUser } from "../../types";

const url = "/users";

export async function createUser(values: IUser) {
    const response = await Axios_instance.post(url, values);

    return response || {};
}