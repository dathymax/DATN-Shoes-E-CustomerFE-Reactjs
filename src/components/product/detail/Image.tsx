import React from "react";
import Detail1 from "../../../assets/images/detail-product/Detail1.png";
import Detail2 from "../../../assets/images/detail-product/Detail2.png";
import Detail3 from "../../../assets/images/detail-product/Detail3.png";
import Detail4 from "../../../assets/images/detail-product/Detail4.png";
import Detail5 from "../../../assets/images/detail-product/Detail5.png";

const ProductDetailImage = () => {
    return (
        <div className="col-span-6">
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <img
                        src={Detail1}
                        alt="Detail"
                        className="w-full rounded-lg object-cover"
                    />
                </div>
                <div className="col-span-1 flex flex-col items-center gap-3">
                    <img
                        src={Detail2}
                        alt="Detail"
                        className="w-[100px] h-[100px] rounded-lg object-cover"
                    />
                    <img
                        src={Detail3}
                        alt="Detail"
                        className="w-[100px] h-[100px] rounded-lg object-cover"
                    />
                    <img
                        src={Detail4}
                        alt="Detail"
                        className="w-[100px] h-[100px] rounded-lg object-cover"
                    />
                    <img
                        src={Detail5}
                        alt="Detail"
                        className="w-[100px] h-[100px] rounded-lg object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductDetailImage;
