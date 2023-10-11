import React from "react";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { genUploadUrl } from "../../../helpers";
import { Divider } from "antd";
import ProductCounterInView from "../counter/InView";
import { AiOutlineClose } from "react-icons/ai";
import { removeFromCart } from "../../../store/features/cart";

const ProductCartQuickView = () => {
    const dispatch = useAppDispatch();
    const items = useAppSelector(state => state.cart.items);

    const handleRemoveFromCart = (index: number) => {
        dispatch(removeFromCart({ index }));
    }

    return (
        items?.map((item, index) => {
            return (
                <>
                    <div
                        key={`${item.product._id}/${index}/${item.product.size}`}
                        className="grid grid-cols-3 gap-3"
                    >
                        <div className="col-span-1">
                            <img
                                src={genUploadUrl(item?.product?.images?.[0].fileName)}
                                alt="Product"
                                className="h-[150px] w-full rounded-md object-cover"
                            />
                        </div>
                        <div className="col-span-2 flex items-center justify-between flex-col gap-2">
                            <div className="flex items-start justify-between w-full">
                                <div className="w-full">
                                    <p>{item?.product?.name}</p>
                                    <p className="font-medium">{item?.product?.category}</p>
                                </div>
                                <AiOutlineClose
                                    className="cursor-pointer text-[20px]"
                                    onClick={() => handleRemoveFromCart(index)}
                                />
                            </div>
                            <div className="mb-3 flex items-center justify-between w-full">
                                <ProductCounterInView initCount={item.quantity} />
                                <p>$ {item?.totalPricePerItem}</p>
                            </div>
                        </div>
                    </div>
                    <Divider />
                </>
            )
        })
    );
};

export default ProductCartQuickView;
