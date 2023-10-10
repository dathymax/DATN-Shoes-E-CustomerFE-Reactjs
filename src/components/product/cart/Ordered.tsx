import React, { FC } from "react";
import Product from "../../../assets/images/Product.png";
import { IProduct } from "../../../types";

interface ProductCartOrderedProps {
    product: IProduct;
}

const ProductCartOrdered: FC<ProductCartOrderedProps> = ({ product }) => {
    return (
        <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1 h-[150px]">
                <img
                    src={Product}
                    alt="Product"
                    className="h-full w-full rounded-md object-cover"
                />
            </div>
            <div className="col-span-2 flex items-center justify-between flex-col gap-2">
                <div className="w-full">
                    <p className="text-[16px] mb-1">{product.category}</p>
                    <p className="font-medium text-[16px]">{product.name}</p>
                </div>
                <div className="ml-4 flex items-center justify-between w-full text-[16px] mb-2">
                    {product.size} | Black
                </div>
            </div>
        </div>
    );
};

export default ProductCartOrdered;
