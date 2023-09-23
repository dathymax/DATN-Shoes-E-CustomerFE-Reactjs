import React, { FC } from "react";

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
    return (
        <>
            <div className="flex items-center justify-between mb-5">
                <h3 className="font-medium">{title}</h3>
                <span className="text-primary">{extra}</span>
            </div>
            <div className="grid grid-cols-12 gap-5">
                {items?.map((item) => {
                    return (
                        <div key={item.key} className="col-span-3">
                            {item.content}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default ProductCarosel;
