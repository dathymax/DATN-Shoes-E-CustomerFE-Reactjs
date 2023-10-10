import Axios_instance from "../../config/axios";
import { IUser } from "../../types";

const url = "/users";
const urlWishlist = "/users/wishlist";

export const UserApis = {
    getUserById: async function (id?: string) {
        const response = await Axios_instance.get(`${url}/${id}`);
        return response?.data || {};
    },
    updateUser: async function (id?: string, values?: IUser) {
        const response = await Axios_instance.patch(`${url}/${id}`, values);
        return response?.data || {};
    },
    createUser: async function (values?: IUser) {
        const response = await Axios_instance.post(url, values);
        return response?.data || {}
    }
};

export const WishlistApis = {
    getWishlistShoeByUserId: async function (userId?: string) {
        const response = await Axios_instance.get(`${urlWishlist}/${userId}`);
        return response?.data || [];
    },
    addWishlistByUserId: async function (userId?: string, shoeId?: string) {
        const response = await Axios_instance.post(`${urlWishlist}/${userId}/${shoeId}`);
        return response?.data || {};
    },
    deleteWishlistShoeByShoeId: async function (shoeId?: string) {
        const response = await Axios_instance.delete(`${urlWishlist}/${shoeId}`);
        return response?.data || {};
    },
}