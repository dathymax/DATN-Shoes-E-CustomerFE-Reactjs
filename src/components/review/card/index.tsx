import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const ReviewCard = () => {
    return (
        <div className="h-[400px] bg-gray-100 rounded-lg px-3 py-8 flex items-center flex-col justify-between">
            <div>
                <h3 className="mb-3">Love the Sweater</h3>
                <p className="text-gray-500 text-[13px] leading-[20px]">
                    I really love how it looks, and it is indeed have a good
                    quality fabric. I am ready to create color coordinated look
                    with this sweater
                </p>
            </div>
            <div className="w-full">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <div className="flex items-center justify-between">
                    <p className="text-[12px] text-gray-500">Yahyo Prayogo</p>
                    <p className="text-[12px] text-gray-500">05/04/22</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
