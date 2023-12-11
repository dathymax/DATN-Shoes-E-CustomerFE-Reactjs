import { FC } from "react";
import { IPurchasedProduct } from "../../../types";

interface ProductCartInTransactionProps {
    product?: IPurchasedProduct;
}

const ProductCartInTransaction: FC<ProductCartInTransactionProps> = ({ product }) => {
    return (
        <div className="grid grid-cols-3 gap-3">
            <div className="col-span-1 h-[150px]">
                <img
                    src={product?.image?.toString()}
                    alt="Product"
                    className="h-full w-full rounded-md object-cover"
                />
            </div>
            <div className="col-span-2 flex items-center justify-between flex-col gap-2">
                <div className="w-full">
                    <p className="text-[16px] mb-1">{product?.category}</p>
                    <p className="font-medium text-[16px]">{product?.name}</p>
                </div>
                <div className="ml-4 flex items-center w-full text-[16px] mb-2">
                    {product?.size} | <p className="capitalize ml-1 flex items-center gap-2">
                        {product?.color}
                        <p className="w-[25px] h-[25px] rounded-lg" style={{ background: product?.color }}></p>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductCartInTransaction;
