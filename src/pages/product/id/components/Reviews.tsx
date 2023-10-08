import React, { useEffect, useState } from "react";
import ReviewCard from "../../../../components/review/card";
import ReviewService from "../../../../components/review/card/Service";
import { ReviewApis } from "../../../../apis/review";
import { IReview } from "../../../../types";
import { getRandomElementsFromArray } from "../../../../helpers";

const ProductDetailReviews = () => {
    const [reviews, setReviews] = useState<IReview[]>([]);

    useEffect(() => {
        ReviewApis.getAllReviews()
            .then((response) => {
                setReviews(response?.data);
            })
            .catch(() => {});
    }, []);

    return (
        <div className="grid grid-cols-12 gap-5">
            <div className="col-span-3">
                <ReviewService />
            </div>
            {reviews.length > 0 &&
                getRandomElementsFromArray(reviews, 3).map((review) => {
                    return (
                        <div key={review?._id} className="col-span-3">
                            <ReviewCard review={review} />
                        </div>
                    );
                })}
        </div>
    );
};

export default ProductDetailReviews;
