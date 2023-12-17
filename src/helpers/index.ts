import jwt_decode from "jwt-decode";
import { IUser } from "../types";
import { UPLOAD_URL } from "../constants";

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

export function getRandomElementsFromArray(arr: any[], n: number) {
    const shuffled = arr.slice(0);
    let i = arr.length;
    const min = i - n;

    while (i-- > min) {
        const index = Math.floor((i + 1) * Math.random());
        [shuffled[index], shuffled[i]] = [shuffled[i], shuffled[index]];
    }

    return shuffled.slice(min);
}

export function genUploadUrl(fileName?: string) {
    return `${UPLOAD_URL}/${fileName}`;
}

export const convertStatus = (status?: string) => {
    switch (status) {
        case "process":
            return "Processing";
        case "return":
            return "Return";
        case "delivering":
            return "In Delivering";
        case "packed":
            return "Packed";
        default:
            break;
    }
};
