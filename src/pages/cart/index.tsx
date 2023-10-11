import ProductCartList from "../../components/product/cart/List";
import ProductCartEmpty from "../../components/product/cart/Empty";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { removeCart } from "../../store/features/cart";

const MyShoppingCart = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const items = useAppSelector(state => state.cart.items);

    return (
        <div className="container m-auto py-16 text-center">
            <div className="flex items-center justify-between mb-10">
                <h1 className="text-left text-3xl">My shopping cart</h1>
                <div className="text-right flex items-center gap-4 justify-end">
                    {items.length > 0 ? (
                        <>
                            <Button
                                type="default"
                                size="large"
                                className="text-red-500 cursor-pointer"
                                onClick={() => dispatch(removeCart())}
                            >
                                Remove all
                            </Button>
                            <Button
                                size="large"
                                onClick={() => navigate("/products")}
                            >
                                Continue shopping
                            </Button>
                            <Button
                                size="large"
                                type="primary"
                                onClick={() => navigate("/checkout")}
                            >
                                Checkout
                            </Button>
                        </>
                    ) : null}
                </div>
            </div>
            {items.length <= 0 ? (
                <ProductCartEmpty />
            ) : (
                <ProductCartList cartItems={items} />
            )}
        </div>
    );
};

export default MyShoppingCart;
