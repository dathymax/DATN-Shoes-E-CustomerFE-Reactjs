import React, { useState } from "react";
import Cart from "../../../../assets/images/Cart.png";
import { Button, Divider, Drawer } from "antd";
import { useNavigate } from "react-router-dom";
import ProductCartQuickView from "../../../../components/product/cart/QuickView";

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
            <img
                src={Cart}
                alt="Cart"
                onClick={handleOpen}
                className="cursor-pointer"
            />

            <Drawer
                title=""
                placement="right"
                onClose={handleClose}
                open={open}
                destroyOnClose
            >
                <div className="flex items-center justify-between">
                    <h3>Your cart</h3>
                    <p className="text-red-600">Clear all</p>
                </div>
                <Divider className="my-4" />
                <ProductCartQuickView />
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
