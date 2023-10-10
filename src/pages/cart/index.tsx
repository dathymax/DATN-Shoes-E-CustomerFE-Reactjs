import ProductCartList from "../../components/product/cart/List";
import ProductCartEmpty from "../../components/product/cart/Empty";
import React from "react";
import { useAppSelector } from "../../store/store";
import { Button } from "antd";

const MyShoppingCart = () => {
    const items = useAppSelector((state) => state.products.items);

    return (
        <div className="container m-auto py-16 text-center">
            <div className="flex items-center justify-between mb-10">
                <h1 className="text-left text-3xl">My shopping cart</h1>
                <div className="text-right flex items-center gap-4 justify-end">
                    {items.length > 0 ? (
                        <Button type="default" size="large" className="text-red-500 cursor-pointer">
                            Remove all
                        </Button>
                    ) : null}
                    <Button size="large">
                        Continue shopping
                    </Button>
                    <Button size="large" type="primary">
                        Checkout
                    </Button>
                </div>
            </div>
            {items.length <= 0 ? (
                <ProductCartEmpty />
            ) : (
                <ProductCartList products={items} />
            )}
        </div>
    );
};

export default MyShoppingCart;
