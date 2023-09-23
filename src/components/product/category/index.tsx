import React, { FC } from "react";

export interface IProductCategory {
    name: string;
    quantity: number;
    image: string;
}

const ProductCategory: FC<IProductCategory> = ({ name, quantity, image }) => {
    return (
        <div className="bg-gray-200 rounded-lg px-3 flex items-center justify-between">
            <div>
                <p className="text-[16px] font-medium mb-2">{name}</p>
                <span className="text-[12px]">
                    {quantity} {quantity > 1 ? "products" : "product"}
                </span>
            </div>

            <img src={image} alt="Image" />
        </div>
    );
};

export default ProductCategory;
