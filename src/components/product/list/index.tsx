import React from "react";
import ProductIMG from "../../../assets/images/Product.png";
import ProductCard from "../card";

const ProductList = () => {
    return (
        <div className="grid grid-cols-12 gap-5">
            {new Array(10).fill(1).map((item, index) => {
                return (
                    <div className="col-span-4">
                        <ProductCard
                            key={index}
                            img={ProductIMG}
                            name={"Nike Zoom Kd lii"}
                            price={300}
                            isNew
                            isLiked
                            isSoldOut
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default ProductList;
