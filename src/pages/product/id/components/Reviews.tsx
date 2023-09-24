import React from "react";
import ReviewCard from "../../../../components/review/card";

const ProductDetailReviews = () => {
    return (
        <div className="grid grid-cols-12 gap-5">
            {new Array(4).fill(1).map((item, index) => {
                return (
                    <div key={item + index} className="col-span-3">
                        <ReviewCard />
                    </div>
                );
            })}
        </div>
    );
};

export default ProductDetailReviews;
