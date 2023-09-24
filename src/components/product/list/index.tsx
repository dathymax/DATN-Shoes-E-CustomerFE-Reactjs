import React from "react";
import ProductIMG from "../../../assets/images/Product.png";
import ProductCard from "../card";
import { Link } from "react-router-dom";

const ProductList = () => {
    return (
        <div className="grid grid-cols-12 gap-5">
            {new Array(10).fill(1).map((item, index) => {
                return (
                    <Link
                        to={`/products/${index}`}
                        key={index}
                        className="col-span-4 text-black"
                    >
                        <ProductCard
                            key={index}
                            img={ProductIMG}
                            name={"Nike Zoom Kd lii"}
                            price={300}
                            isNew
                            isLiked
                            isSoldOut
                        />
                    </Link>
                );
            })}
        </div>
    );
};

export default ProductList;
