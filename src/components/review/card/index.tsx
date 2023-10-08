import React, { FC } from "react";
import { IReview } from "../../../types";
import { Rate } from "antd";
import dayjs from "dayjs";

interface ReviewCardProps {
    review?: IReview;
}

const ReviewCard: FC<ReviewCardProps> = ({ review }) => {
    return (
        <div className="h-[400px] bg-gray-100 rounded-lg px-3 py-8 flex items-center flex-col justify-between">
            <div className="w-full">
                <h3 className="mb-3 text-[25px]">{review?.title}</h3>
                <p className="text-gray-500 text-[16px] leading-[20px]">
                    {review?.description}
                </p>
            </div>
            <div className="w-full">
                <Rate disabled value={review?.rate} />
                <div className="flex items-center justify-between">
                    <p className="text-[12px] text-gray-500">
                        {review?.authorName}
                    </p>
                    <p className="text-[12px] text-gray-500">
                        {dayjs(review?.reviewDate).format("DD/MM/YYYY")}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
