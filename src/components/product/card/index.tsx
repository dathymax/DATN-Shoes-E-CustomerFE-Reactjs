import { FC } from "react";
import Fire from "../../../assets/images/Fire.png";
import Heart from "../../../assets/images/HeartProduct.png";
import HeartFill from "../../../assets/images/HeartFill.png";
import { IProduct } from "../../../types";
import { UPLOAD_URL } from "../../../constants";

export interface IProductCardProps {
    product?: IProduct
}

const ProductCard: FC<IProductCardProps> = ({ product }) => {
    return (
        <div className="relative">
            <img
                src={`${UPLOAD_URL}/${product?.images?.[0]?.fileName}`}
                alt="Product card image"
                className="w-full h-[450px] object-cover rounded-lg"
            />
            <p className="my-2 text-[13px]">{product?.name}</p>
            <p className="text-[16px] font-bold">${product?.price}</p>

            <div className="absolute top-0 p-2 w-full flex items-start justify-between">
                <div>
                    {product?.isNew && (
                        <div className="flex items-center mb-2 justify-center gap-1 bg-white rounded-lg px-3 py-2">
                            <span>New</span>
                            <img src={Fire} alt="Fire" />
                        </div>
                    )}
                    {product?.isSoldOut && (
                        <div className="bg-black text-white px-3 py-2 text-center rounded-lg">
                            Sold out
                        </div>
                    )}
                </div>
                <div className="border border-gray-300 p-2 rounded-full bg-white flex items-center justify-center">
                    {product?.isLiked ? (
                        <img src={HeartFill} alt="HeartFill" />
                    ) : (
                        <img src={Heart} alt="Heart" />
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
