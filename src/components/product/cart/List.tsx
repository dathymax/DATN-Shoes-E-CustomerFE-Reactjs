import { Button, Divider } from "antd";
import React, { FC, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import ProductCartOrdered from "./Ordered";
import ColorParameter from "../detail/parameter/Color";
import SizeParamter from "../detail/parameter/Size";
import ProductCartRemove from "./Remove";
import CustomModal from "../../feedback/modal";
import { CartItem } from "../../../store/features/cart";
import ColorEditParameter from "../detail/parameter/ColorEdit";
import SizeEditParamter from "../detail/parameter/SizeEdit";

interface IProductCartList {
    cartItems?: CartItem[];
}

const ProductCartList: FC<IProductCartList> = ({ cartItems = [] }) => {
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [index, setIndex] = useState(0);

    const handleOpenEdit = (index: number) => {
        setOpenEdit(true);
        setIndex(index)
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };

    const handleOpenDelete = () => {
        setOpenDelete(true);
    };

    const handleCloseDelete = () => {
        setOpenDelete(false);
    };

    return (
        <>
            <div className="grid grid-cols-6 gap-3 text-[20px] text-left">
                <div className="col-span-2">Product</div>
                <div className="col-span-1"></div>
                <div className="col-span-1">Price</div>
                <div className="col-span-1">Quantity</div>
                <div className="col-span-1">Total</div>
            </div>
            <Divider />
            {cartItems.map((cartItem, index) => {
                return (
                    <>
                        <div
                            key={`${cartItem?.product?._id}/${index}/${cartItem?.product?.price}`}
                            className="grid grid-cols-6 gap-3 text-left mb-7"
                        >
                            <div className="col-span-2">
                                <ProductCartOrdered cartItem={cartItem} />
                            </div>
                            <div className="col-span-1 flex items-center justify-center gap-2">
                                <p
                                    className="mx-1 cursor-pointer flex items-center justify-center gap-1"
                                    onClick={() => handleOpenEdit(index)}
                                >
                                    <FiEdit /> Edit
                                </p>
                                <p
                                    className="mx-1 text-red-500 cursor-pointer flex items-center justify-center gap-1"
                                    onClick={handleOpenDelete}
                                >
                                    <AiOutlineDelete /> Delete
                                </p>
                            </div>
                            <div className="col-span-1 flex items-center">
                                $ {cartItem?.product?.price}
                            </div>
                            <div className="col-span-1 flex items-center">
                                {cartItem.quantity}
                            </div>
                            <div className="col-span-1 flex items-center">
                                $ {cartItem.totalPricePerItem}
                            </div>
                        </div>
                    </>
                );
            })}

            <CustomModal
                title="Edit cart"
                open={openEdit}
                onCancel={handleCloseEdit}
                centered
                footer={null}
                width={600}
                destroyOnClose
            >
                <ProductCartOrdered cartItem={cartItems[index]} />
                <Divider />
                <div className="flex items-center justify-between">
                    <ColorEditParameter initColor={cartItems[index]?.color} />
                    <SizeEditParamter initSize={cartItems[index]?.size} />
                </div>
                <Divider />
                <Button className="h-[50px]" type="primary" block>
                    Update cart
                </Button>
            </CustomModal>

            <CustomModal
                open={openDelete}
                onCancel={handleCloseDelete}
                centered
                footer={null}
                width={600}
                destroyOnClose
            >
                <ProductCartRemove index={index} onCancel={handleCloseDelete} />
            </CustomModal>
        </>
    );
};

export default ProductCartList;
