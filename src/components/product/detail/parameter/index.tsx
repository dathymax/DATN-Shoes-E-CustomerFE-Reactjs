import { Button, Divider } from "antd";
import React from "react";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import ColorParameter from "./Color";
import SizeParamter from "./Size";
import DescriptionParameter from "./Description";
import ProductCounter from "../../counter";
import { AiOutlineZoomIn, AiOutlineShoppingCart } from "react-icons/ai";

const ProductDetailParameter = () => {
    return (
        <div className="col-span-6 bg-gray-50 rounded-lg p-6">
            <h3 className="text-[30px] font-medium">Nike template</h3>
            <p className="my-4 text-[25px] font-medium">$ 400.00</p>
            <div className="flex items-center justify-between">
                <p>398 products have been sold</p>
                <div className="flex items-center justify-center gap-3">
                    <p className="flex items-center justify-center gap-1">
                        <AiOutlineHeart /> Wishlist
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
            <div className="flex items-center justify-between gap-3 mt-5">
                <ProductCounter />
                <Button
                    className="h-[50px] flex items-center justify-center gap-2"
                    block
                >
                    <AiOutlineZoomIn className="text-[16px]" />
                    <p className="font-medium">Preview</p>
                </Button>
                <Button
                    className="h-[50px] flex items-center justify-center gap-3"
                    block
                    type="primary"
                >
                    <AiOutlineShoppingCart className="text-[16px]" />
                    <p className="font-medium">Add to cart</p>
                </Button>
            </div>
            <Divider />
            <DescriptionParameter />
        </div>
    );
};

export default ProductDetailParameter;
