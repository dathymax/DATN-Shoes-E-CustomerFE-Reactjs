import React from "react";
import ProductDetailImage from "../../../components/product/detail/Image";
import ProductDetailParameter from "../../../components/product/detail/parameter";
import Tabs from "../../../components/navigation/tabs";
import ProductDetailReviews from "./components/Reviews";
import ShippingAndReturns from "./components/ShippingAndReturns";
import HomePageBestSelling from "../../home/components/BestSelling";

const ProductDetailPage = () => {
    return (
        <div className="container m-auto p-10">
            <div className="grid grid-cols-12 gap-20">
                <ProductDetailImage />
                <ProductDetailParameter />
            </div>
            <div className="h-[50px]"></div>
            <Tabs
                items={[
                    {
                        label: "Customer reviews",
                        key: "customer-reviews",
                        children: <ProductDetailReviews />,
                    },
                    {
                        label: "Shipping & returns",
                        key: "shipping&returns",
                        children: <ShippingAndReturns />,
                    },
                ]}
            />
            <div className="h-[60px]"></div>
            <HomePageBestSelling />
        </div>
    );
};

export default ProductDetailPage;
