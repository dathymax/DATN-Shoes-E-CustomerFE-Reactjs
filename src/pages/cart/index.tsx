import ProductCartList from "../../components/product/cart/List";
import ProductCartEmpty from "../../components/product/cart/Empty";
import React, { useEffect } from "react";

const MyShoppingCart = () => {
    const products = [1, 2, 3];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container m-auto py-16 text-center">
            <div className="flex items-center justify-between mb-10">
                <h1 className="text-left">My shopping cart</h1>
                {products.length > 0 ? <p className="text-red-500 cursor-pointer">Remove all</p> : null}
            </div>
            {products.length <= 0 ? <ProductCartEmpty /> : <ProductCartList products={products} />}
        </div>
    );
};

export default MyShoppingCart;
