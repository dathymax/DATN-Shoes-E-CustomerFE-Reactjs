export enum EAddressLabel {
    HOME = "home",
    OFFICE = "office"
}

export interface IUser {
    _id?: string;
    id?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    username?: string;
    password?: string;
    role?: string;
    avatar?: string;
    phoneNumber?: string | number
}

export interface IProduct {
    _id?: string;
    id?: string | number;
    img?: string;
    price?: string | number;
    isNew?: boolean;
    isLiked?: boolean;
    isSoldOut?: boolean;
    stock?: number;
    name?: string;
    rate?: number;
    shoeType?: string;
    color?: string;
    size?: number;
    description?: string;
    category?: string;
    status?: string | boolean;
    discountType?: string;
    setDiscount?: string;
}

export interface IPasswordReset {
    password?: string;
    newPassword?: string;
    confirmPassword?: string;
}

export interface IAddressShipping {
    id?: string,
    _id?: string,
    addressLabel?: EAddressLabel,
    country?: string,
    address?: string,
    province?: string,
    city?: string,
    district?: string,
    postalCode?: string,
    userId?: string
}

export interface IReview {
    id?: string,
    _id?: string,
    title?: string,
    description?: string,
    authorName?: string,
    authorEmail?: string,
    rate?: number,
    reviewDate?: Date,
}