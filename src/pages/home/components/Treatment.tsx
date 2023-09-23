import React from "react";
import BestQuality from "../../../assets/images/more/BestQuality.png";
import EasyPayment from "../../../assets/images/more/EasyPayment.png";
import OnTime from "../../../assets/images/more/OnTime.png";
import FreeReturn1 from "../../../assets/images/more/FreeReturn1.png";
import FreeReturn2 from "../../../assets/images/more/FreeReturn2.png";

const HomePageTreatment = () => {
    return (
        <div className="grid grid-cols-12 gap-5">
            <div className="col-span-3">
                <div className="bg-gray-200 h-[245px] rounded-lg flex items-center justify-center">
                    <img src={BestQuality} alt="BestQuality" />
                </div>
                <p className="font-medium my-3">Best Quality Guarantee</p>
                <p className="text-gray-500 text-[13px]">
                    Product that arrived at your door already passed our Quality
                    Control procedure.
                </p>
            </div>

            <div className="col-span-3">
                <div className="bg-gray-200 h-[245px] rounded-lg flex items-center justify-center">
                    <img src={EasyPayment} alt="EasyPayment" />
                </div>
                <p className="font-medium my-3">Easy Payment Choice</p>
                <p className="text-gray-500 text-[13px]">
                    Various payment choice will give an ease every time you
                    purchase our product
                </p>
            </div>

            <div className="col-span-3">
                <div className="bg-gray-200 h-[245px] rounded-lg flex items-center justify-center">
                    <img src={OnTime} alt="OnTime" />
                </div>
                <p className="font-medium my-3">On-Time Delivery</p>
                <p className="text-gray-500 text-[13px]">
                    We will make sure that all product that you purchased will
                    arrived at your address
                </p>
            </div>

            <div className="col-span-3">
                <div className="bg-gray-200 h-[245px] rounded-lg relative">
                    <img
                        src={FreeReturn1}
                        alt="FreeReturn1"
                        className="absolute left-[50%] top-[50%]"
                        style={{ transform: "translate(-50%, -50%)" }}
                    />
                    <img
                        src={FreeReturn2}
                        alt="FreeReturn2"
                        className="absolute left-[50%] top-[50%]"
                        style={{ transform: "translate(-43%, -40%)" }}
                    />
                </div>
                <p className="font-medium my-3">Free Return</p>
                <p className="text-gray-500 text-[13px]">
                    100% refund when there is a product quality problem
                </p>
            </div>
        </div>
    );
};

export default HomePageTreatment;
