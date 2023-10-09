import { Button } from "antd";
import React, { FC, useRef } from "react";
import Slider from "react-slick";
import { GrNext, GrPrevious } from "react-icons/gr";

interface IItem {
    key?: string | number;
    content?: React.ReactNode;
}

interface ProductCaroselProps {
    title?: React.ReactNode;
    extra?: React.ReactNode;
    items?: IItem[];
    itemsPerSlide?: number;
}

const ProductCarosel: FC<ProductCaroselProps> = ({ title, extra, items }) => {
    const ref = useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 4,
        arrows: false,
        autoPlay: true,
        autoPlaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="relative">
            <div className="flex items-center justify-between mb-5">
                <h3 className="font-medium">{title}</h3>
                <span className="text-primary">{extra}</span>
            </div>
            <Button
                className="absolute bg-white rounded-full w-[40px] h-[40px] border border-gray-300 outline-none -left-10 flex items-center justify-center top-[50%]"
                style={{ transform: "translate(-50%, -25%)" }}
                onClick={() => ref?.current?.slickPrev()}
            >
                <GrPrevious />
            </Button>
            <Slider ref={ref} {...settings}>
                {items?.map((item) => {
                    return (
                        <div key={item.key}>
                            {item.content}
                        </div>
                    );
                })}
            </Slider>
            <Button
                className="absolute bg-white rounded-full w-[40px] h-[40px] border border-gray-300 outline-none -right-10 flex items-center justify-center top-[50%]"
                style={{ transform: "translate(50%, -25%)" }}
                onClick={() => ref?.current?.slickNext()}
            >
                <GrNext />
            </Button>
        </div>
    );
};

export default ProductCarosel;
