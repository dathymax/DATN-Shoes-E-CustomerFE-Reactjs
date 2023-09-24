import React from "react";
import NoOrder from "../../assets/images/cart/NoOrder.png";
import { Button } from "antd";

const MyShoppingCart = () => {
    return (
        <div className="container m-auto py-16 text-center">
            <h1 className="mb-10 text-left">My shopping cart</h1>
            <img src={NoOrder} alt="NoOrder" />
            <h3>Empty shopping cart</h3>
            <p className="text-gray-500 text-[14px] my-4">
                You don't have any products in your cart.
            </p>
            <Button
                type="primary"
                style={{ height: 50, width: 400 }}
                href="/products"
            >
                <p className="flex items-center justify-center h-full">
                    Continue shopping
                </p>
            </Button>
        </div>
    );
};

export default MyShoppingCart;
