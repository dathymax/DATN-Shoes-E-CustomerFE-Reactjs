import { useEffect } from "react";
import ReviewCard from "../../../../components/review/card";
import ReviewService from "../../../../components/review/card/Service";
import { ReviewApis } from "../../../../apis/review";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { setAllReviews } from "../../../../store/features/reviews";

const ProductDetailReviews = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const items = useAppSelector((state) => state.review.items);

    useEffect(() => {
        ReviewApis.getAllReviews(id)
            .then((response) => {
                dispatch(setAllReviews(response?.data));
            })
            .catch(() => {});
    }, []);

    return (
        <div className="grid grid-cols-12 gap-5">
            <div className="col-span-3">
                <ReviewService />
            </div>
            {items?.length > 0 &&
                items?.slice(0, 2)?.map((review) => {
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
