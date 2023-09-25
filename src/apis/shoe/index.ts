import Axios_instance from "../../config/axios";

const url = "/shoes";

export async function getAllShoes() {
    const response = await Axios_instance.get(url);

    return response?.data || []
}