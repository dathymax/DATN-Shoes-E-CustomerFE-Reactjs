import React from "react";
import ProductCard from "../card";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../store/store";

const ProductList = () => {
    const items = useAppSelector((state) => state.products.items);

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
