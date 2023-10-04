import React from "react";
import ProductCounter from "../counter";
import { useAppSelector } from "../../../store/store";
import { genUploadUrl } from "../../../helpers";

const ProductCartQuickView = () => {
    const item = useAppSelector(state => state.products.item);

    return (
        <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1">
                <img
                    src={genUploadUrl(item?.images?.[0].fileName)}
                    alt="Product"
                    className="h-[150px] w-full rounded-md object-cover"
                />
            </div>
            <div className="col-span-2 flex items-center justify-between flex-col gap-2">
                <div className="w-full">
                    <p>{item.name}</p>
                    <p className="font-medium">{item.category}</p>
                </div>
                <div className="flex items-center justify-between w-full">
                    <ProductCounter />
                    <p>$ {item.price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCartQuickView;
