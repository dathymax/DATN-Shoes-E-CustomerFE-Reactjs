import React, { useEffect } from "react";
import ProductCard from "../card";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { ProductApis } from "../../../apis/product";
import { setAllProduct } from "../../../store/features/products";

const ProductList = () => {
    const dispatch = useAppDispatch();
    const items = useAppSelector(state => state.products.items);

    useEffect(() => {
        ProductApis.getAllProducts().then(response => {
            dispatch(setAllProduct(response?.data));
        }).catch(() => { })
    }, [])

    return (
        <div className="grid grid-cols-12 gap-5">
            {items?.map((item) => {
                return (
                    <Link
                        to={`/products/${item._id}`}
                        key={item._id}
                        className="col-span-4 text-black"
                    >
                        <ProductCard product={item} />
                    </Link>
                );
            })}
        </div>
    );
};

export default ProductList;
