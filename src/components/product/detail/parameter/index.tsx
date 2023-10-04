import { Button, Divider, Modal } from "antd";
import React, { useState } from "react";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import ColorParameter from "./Color";
import SizeParamter from "./Size";
import DescriptionParameter from "./Description";
import ProductCounter from "../../counter";
import { AiOutlineZoomIn, AiOutlineShoppingCart } from "react-icons/ai";
import ProductCartQuickView from "../../../../components/product/cart/QuickView";
import ProductCartSubTotal from "../../../../components/product/cart/SubTotal";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../../store/store";

const ProductDetailParameter = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const item = useAppSelector(state => state.products.item);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className="col-span-6 bg-gray-50 rounded-lg p-6">
            <h3 className="text-[30px] font-medium">{item.name}</h3>
            <p className="my-4 text-[25px] font-medium">${item.price}</p>
            <div className="flex items-center justify-between">
                <p>398 products have been sold</p>
                <div className="flex items-center justify-center gap-3">
                    <p className="flex items-center justify-center gap-1 cursor-pointer">
                        <AiOutlineHeart /> Wishlist
                    </p>
                    <p className="flex items-center justify-center gap-1 cursor-pointer">
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
                    onClick={handleOpen}
                >
                    <AiOutlineShoppingCart className="text-[16px]" />
                    <p className="font-medium">Add to cart</p>
                </Button>
            </div>
            <Divider />
            <DescriptionParameter />

            <Modal
                open={open}
                onCancel={handleClose}
                destroyOnClose
                title={"Added to cart"}
                footer={null}
                centered
            >
                <ProductCartQuickView />
                <ProductCartSubTotal />
                <Divider />

                <div className="flex items-center justify-center gap-3">
                    <Button block className="h-[50px]" onClick={() => navigate("/my-cart")}>
                        View cart
                    </Button>
                    <Button type="primary" block className="h-[50px]" onClick={() => navigate("/my-cart")}>
                        Checkout
                    </Button>
                </div>
            </Modal>
        </div>
    );
};

export default ProductDetailParameter;
