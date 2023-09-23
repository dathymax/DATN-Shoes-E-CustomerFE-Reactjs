import React from "react";
import ProductCarosel from "../../../components/product/carosel";
import { Link } from "react-router-dom";
import ProductCard, { IProductCard } from "../../../components/product/card";
import ProductIMG from "../../../assets/images/Product.png";

const HomePageBestSelling = () => {
    const data: IProductCard[] = [
        {
            id: 1,
            img: ProductIMG,
            name: "Nike Zoom Kd lii",
            price: 300,
            isNew: true,
            isLiked: true,
            isSoldOut: true,
        },
        {
            id: 2,
            img: ProductIMG,
            name: "Nike Zoom Kd lii",
            price: 300,
            isNew: true,
            isLiked: true,
            isSoldOut: true,
        },
        {
            id: 3,
            img: ProductIMG,
            name: "Nike Zoom Kd lii",
            price: 300,
            isNew: true,
            isLiked: true,
            isSoldOut: true,
        },
        {
            id: 4,
            img: ProductIMG,
            name: "Nike Zoom Kd lii",
            price: 300,
            isNew: true,
            isLiked: true,
            isSoldOut: true,
        },
    ];

    return (
        <ProductCarosel
            title="Best selling"
            extra={
                <Link to={"/"} className="text-[12px] text-primary">
                    View more
                </Link>
            }
            items={data.map((item) => {
                return {
                    key: item.id,
                    content: (
                        <ProductCard
                            key={item.id}
                            img={item.img}
                            name={item.name}
                            price={item.price}
                            isNew={item.isNew}
                            isLiked={item.isLiked}
                            isSoldOut={item.isSoldOut}
                        />
                    ),
                };
            })}
        />
    );
};

export default HomePageBestSelling;
