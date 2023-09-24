import { Divider } from "antd";
import React from "react";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import ColorParameter from "./Color";
import SizeParamter from "./Size";

const ProductDetailParameter = () => {
    return (
        <div className="col-span-6 bg-gray-100 rounded-lg p-6">
            <h3 className="text-[30px] font-medium">Nike template</h3>
            <p className="my-4 text-[25px] font-medium">$ 400.00</p>
            <div className="flex items-center justify-between">
                <p>398 products have been sold</p>
                <div className="flex items-center justify-center gap-3">
                    <p className="flex items-center justify-center gap-1">
                        <AiOutlineHeart /> Wish list
                    </p>
                    <p className="flex items-center justify-center gap-1">
                        <AiOutlineShareAlt /> Share
                    </p>
                </div>
            </div>
            <Divider />
            <div className="flex items-center justify-between">
                <ColorParameter />
                <SizeParamter />
            </div>
        </div>
    );
};

export default ProductDetailParameter;
