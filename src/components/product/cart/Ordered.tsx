import React from 'react'
import Product from "../../../assets/images/Product.png";

const ProductCartOrdered = () => {
    return (
        <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1 h-[200px]">
                <img
                    src={Product}
                    alt="Product"
                    className="h-full w-full rounded-md object-cover"
                />
            </div>
            <div className="col-span-2 flex items-center justify-between flex-col gap-2">
                <div className="w-full">
                    <p>Sprint collection</p>
                    <p className="font-medium">Nike template</p>
                </div>
                <div className="flex items-center justify-between w-full">
                    43 | Black
                </div>
            </div>
        </div>
    )
}

export default ProductCartOrdered