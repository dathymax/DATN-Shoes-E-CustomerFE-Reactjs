import React from "react";
import Product from "../../../assets/images/Product.png";
import ProductCounter from "../counter";

const ProductCartQuickView = () => {
    return (
        <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1">
                <img
                    src={Product}
                    alt="Product"
                    className="h-[150px] w-full rounded-md object-cover"
                />
            </div>
            <div className="col-span-2 flex items-center justify-between flex-col gap-2">
                <div>
                    <span>Sprint collection</span>
                    <span className="font-medium">Nike template</span>
                </div>
                <div className="flex items-center justify-between w-full">
                    <ProductCounter />
                    <p>$ 400.00</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCartQuickView;
