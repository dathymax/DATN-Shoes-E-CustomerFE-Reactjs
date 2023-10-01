import jwt_decode from "jwt-decode";
import { IUser } from "../types";

export const checkItemsPerSlide = (itemsPerSlide: number) => {
    switch (itemsPerSlide) {
        case 1:
            return "col-span-12";
        case 2:
            return "col-span-6";
        case 3:
            return "col-span-4";
        case 4:
            return "col-span-3";
        case 5:
            return "col-span-";
        default:
            break;
    }
};

const accessToken = localStorage.getItem("accessToken");

export const getAccessToken = () => {
    if (!accessToken) {
        return "";
    }

    return accessToken;
};

export const getUserInfo = (): IUser => {
    try {
        if (!accessToken) {
            return {};
        }

        const userInfor: IUser = jwt_decode(accessToken);

        return userInfor;
    } catch (error) {
        console.log(error);

        return {};
    }
};

export const formatStatusFromBoolean = (status?: boolean | string) => {
    if (status) {
        return "active";
    } else {
        return "inactive";
    }
};
