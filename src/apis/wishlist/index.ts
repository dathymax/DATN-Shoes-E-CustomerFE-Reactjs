import Axios_instance from "../../config/axios";

const url = "/wishlist";

export const WishlistApis = {
    getWishlistShoeByUserId: async function (userId?: string) {
        const response = await Axios_instance.get(`${url}/${userId}`);
        return response?.data || [];
    },
    addWishlistByUserId: async function (userId?: string, shoeId?: string) {
        const response = await Axios_instance.post(`${url}`, { userId, shoeId });
        return response?.data || {};
    },
    deleteWishlistShoeByShoeId: async function (shoeId?: string) {
        const response = await Axios_instance.delete(`${url}/${shoeId}`);
        return response?.data || {};
    },
}