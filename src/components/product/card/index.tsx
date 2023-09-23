import React, { FC } from "react";
import Fire from "../../../assets/images/Fire.png";
import Heart from "../../../assets/images/HeartProduct.png";
import HeartFill from "../../../assets/images/HeartFill.png";
import { IProduct } from "../../../types";

export interface IProductCard extends IProduct {}

const ProductCard: FC<IProductCard> = ({
    img,
    name,
    price,
    isLiked,
    isNew,
    isSoldOut,
}) => {
    return (
        <div className="relative">
            <img
                src={img}
                alt="Product card image"
                className="w-full object-cover rounded-lg"
            />
            <p className="my-2 text-[13px]">{name}</p>
            <p className="text-[16px] font-bold">${price}</p>

            <div className="absolute top-0 p-2 w-full flex items-start justify-between">
                <div>
                    {isNew && (
                        <div className="flex items-center mb-2 justify-center gap-1 bg-white rounded-lg px-3 py-2">
                            <span>New</span>
                            <img src={Fire} alt="Fire" />
                        </div>
                    )}
                    {isSoldOut && (
                        <div className="bg-black text-white px-3 py-2 text-center rounded-lg">
                            Sold out
                        </div>
                    )}
                </div>
                <div className="border border-gray-300 p-2 rounded-full bg-white flex items-center justify-center">
                    {isLiked ? (
                        <img src={HeartFill} alt="HeartFill" />
                    ) : (
                        <img src={Heart} alt="Heart" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
