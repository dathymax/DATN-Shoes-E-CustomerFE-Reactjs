import React from "react";

export interface IUser {
    _id?: string;
    id?: string;
    firstname?: string;
    lastname?: string;
    email?: string;
    username?: string;
    password?: string;
    role?: string;
    phoneNumber?: string;
    address?: string;
    addressLabel?: string;
    country?: string;
    province?: string;
    district?: string;
    postalCode?: string;
    city?: string;
    avatar?: string;
    updatedAt?: Date | string;
    promoCodes?: IPromoCode[];
}

export interface IProduct {
    _id?: string;
    id?: string | number;
    images?: IImage[];
    price?: string | number;
    isNew?: boolean;
    isLiked?: boolean;
    isSoldOut?: boolean;
    stock?: number;
    name?: string | React.ReactNode;
    rate?: number;
    shoeType?: string;
    colors?: string;
    sizes?: number;
    description?: string;
    category?: string;
    status?: string | boolean | React.ReactNode;
    discountType?: string;
    setDiscount?: string;
    quantity?: string | number;
}

export interface IPasswordReset {
    password?: string;
    newPassword?: string;
    confirmPassword?: string;
}

export interface IImage {
    _id?: string;
    id?: string | number;
    fileName?: string;
    fileType?: string;
    fileSize?: number;
    filePath?: string;
}

export interface IReview {
    id?: string;
    _id?: string;
    title?: string;
    description?: string;
    authorName?: string;
    authorEmail?: string;
    rate?: number;
    reviewDate?: Date;
}

export interface IWishlistShoe {
    _id?: string;
    id?: string;
    shoeId?: string;
    name?: string;
    rate?: number;
    shoeType?: string;
    color?: string;
    size?: number;
    price?: number;
    description?: string;
    category?: string;
    status?: string;
    discountType?: string;
    setDiscount?: string;
    images?: IImage[];
    createDate?: Date;
    userId?: string;
}

export interface IPurchasedProduct {
    productId?: string;
    name?: React.ReactNode | string;
    category?: string;
    sku?: string;
    size?: string | number;
    image?: string | IImage;
    color?: string;
    quantity?: number | string;
    price?: number | string;
    total?: number | string;
    transactionExt?: string;
}

export interface ITransaction {
    id?: string;
    _id?: string;
    transactionNumber?: number | string;
    date?: Date | string;
    invoice?: string;
    customerName?: string;
    phoneNumber?: string | number;
    status?: string;
    receiptNumber?: string | number;
    address?: string;
    payment?: string;
    purchasedProducts?: IPurchasedProduct[];
    discount?: string | number;
    shipping?: string | number;
    tax?: string | number;
    subTotal?: string | number;
    reason?: string;
    imagesRoof?: IImage[];
    userId?: string;
}

export interface IPromoCode {
    id?: string;
    _id?: string;
    name: string;
    spendTime?: number;
    isExpired?: boolean;
    createDate?: Date;
    modifiedDate?: Date;
}

export enum EAddressLabel {
    HOME = "home",
    OFFICE = "office",
}

export interface IAddressShipping {
    id?: string;
    _id?: string;
    addressLabel?: EAddressLabel;
    country?: string;
    address?: string;
    province?: string;
    city?: string;
    district?: string;
    postalCode?: string;
    userId?: string;
}

export interface IColor {
    name?: string;
    id?: string;
    _id?: string;
    preview?: React.ReactNode;
}
