import { Button, Divider, Modal } from "antd";
import { useState } from "react";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import ColorParameter from "./Color";
import SizeParamter from "./Size";
import DescriptionParameter from "./Description";
import { AiOutlineZoomIn, AiOutlineShoppingCart } from "react-icons/ai";
import ProductCartQuickView from "../../../../components/product/cart/QuickView";
import ProductCartSubTotal from "../../../../components/product/cart/SubTotal";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { genUploadUrl } from "../../../../helpers";
import { WishlistApis } from "../../../../apis/wishlist";
import { useAppContext } from "../../../../contexts/AppContext";
import { addToCart } from "../../../../store/features/cart";

const ProductDetailParameter = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.auth.userInfo);
    const [open, setOpen] = useState(false);
    const [openPreview, setOpenPreview] = useState(false);
    const item = useAppSelector((state) => state.products.item);
    const { openNotiError, openNotiSuccess } = useAppContext();
    const items = useAppSelector((state) => state.cart.items);

    const handleOpen = () => {
        setOpen(true);
        const existProduct = items.findIndex(
            (item) => item?.product?._id === id
        );
        if (existProduct === -1) {
            dispatch(
                addToCart({
                    product: item,
                    quantity: 1,
                    totalPricePerItem: Number(item.price) * 1,
                    color: item?.colors,
                    size: item?.sizes,
                })
            );
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpenPreview = () => {
        setOpenPreview(true);
    };

    const handleClosePreview = () => {
        setOpenPreview(false);
    };

    const handeAddWishlist = () => {
        WishlistApis.addWishlistByUserId(user.id, item._id)
            .then(() => {
                openNotiSuccess("Add wishlist");
                window.location.reload();
            })
            .catch(() => {
                openNotiError("Add wishlist");
            });
    };

    return (
        <div className="col-span-6 bg-gray-50 rounded-lg p-6">
            <h3 className="text-[30px] font-medium">{item.name}</h3>
            <p className="my-4 text-[25px] font-medium">${item.price}</p>
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-3">
                    <p
                        className="flex items-center justify-center gap-1 cursor-pointer"
                        onClick={handeAddWishlist}
                    >
                        <AiOutlineHeart /> Wishlist
                    </p>
                    <p className="flex items-center justify-center gap-1 cursor-pointer">
                        <AiOutlineShareAlt /> Share
                    </p>
                </div>
            </div>
            <Divider />
            <div className="flex items-center justify-between">
                <ColorParameter />
                <div className="flex items-center gap-4">
                    <p>Quantity:</p>
                    <p>{item?.quantity}</p>
                </div>
                <SizeParamter />
            </div>
            <div className="flex items-center justify-between gap-3 mt-5">
                <Button
                    className="h-[50px] flex items-center justify-center gap-2"
                    block
                    onClick={handleOpenPreview}
                >
                    <AiOutlineZoomIn className="text-[16px]" />
                    <p className="font-medium">Preview</p>
                </Button>
                <Button
                    className="h-[50px] flex items-center justify-center gap-3"
                    block
                    type="primary"
                    onClick={handleOpen}
                >
                    <AiOutlineShoppingCart className="text-[16px]" />
                    <p className="font-medium">Add to cart</p>
                </Button>
            </div>
            <Divider />
            <DescriptionParameter description={item.description} />

            <Modal
                open={open}
                onCancel={handleClose}
                destroyOnClose
                title={"Added to cart"}
                footer={null}
                centered
            >
                <ProductCartQuickView />
                <ProductCartSubTotal />
                <Divider />

                <div className="flex items-center justify-center gap-3">
                    <Button
                        block
                        className="h-[50px]"
                        onClick={() => navigate("/my-cart")}
                    >
                        View cart
                    </Button>
                    <Button
                        type="primary"
                        block
                        className="h-[50px]"
                        onClick={() => navigate("/my-cart")}
                    >
                        Checkout
                    </Button>
                </div>
            </Modal>

            <Modal
                open={openPreview}
                onCancel={handleClosePreview}
                destroyOnClose
                title={"Preview"}
                footer={null}
                centered
            >
                <img
                    src={genUploadUrl(item.images?.[0].fileName)}
                    alt="Preview image"
                    className="w-full h-full rounded-lg"
                />
            </Modal>
        </div>
    );
};

export default ProductDetailParameter;
