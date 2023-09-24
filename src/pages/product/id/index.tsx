import React from "react";
import ProductDetailImage from "../../../components/product/detail/Image";
import ProductDetailParameter from "../../../components/product/detail/parameter";

const ProductDetailPage = () => {
    return (
        <div className="container m-auto p-10">
            <div className="grid grid-cols-12 gap-20">
                <ProductDetailImage />
                <ProductDetailParameter />
            </div>
        </div>
    );
};

export default ProductDetailPage;
