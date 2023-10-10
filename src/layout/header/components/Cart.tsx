import React, { useState } from "react";
import Cart from "../../../assets/images/Cart.png";
import { Button, Divider, Drawer } from "antd";
import { useNavigate } from "react-router-dom";
import ProductCartQuickView from "../../../components/product/cart/QuickView";
import ProductCartSubTotal from "../../../components/product/cart/SubTotal";
import { BsCart3 } from "react-icons/bs"

const HeaderCart = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <BsCart3
                onClick={handleOpen}
                className="cursor-pointer text-white text-[22px]"
            />

            <Drawer
                title=""
                placement="right"
                onClose={handleClose}
                open={open}
                destroyOnClose
                width={600}
            >
                <div className="flex items-center justify-between">
                    <h3>Your cart</h3>
                    <p className="text-red-600 cursor-pointer">Clear all</p>
                </div>
                <Divider className="my-4" />
                <ProductCartQuickView />
                <ProductCartSubTotal />
                <Divider className="my-4" />
                <div className="flex items-center gap-5">
                    <Button
                        className="h-[45px]"
                        block
                        onClick={() => {
                            navigate("/my-cart");
                            setOpen(false);
                        }}
                    >
                        View cart
                    </Button>
                    <Button
                        className="h-[45px]"
                        type="primary"
                        block
                        onClick={() => {
                            navigate("/checkout");
                            setOpen(false);
                        }}
                    >
                        Checkout
                    </Button>
                </div>
            </Drawer>
        </div>
    );
};

export default HeaderCart;
