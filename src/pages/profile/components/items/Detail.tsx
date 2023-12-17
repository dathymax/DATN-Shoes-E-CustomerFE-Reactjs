import { Button, Divider } from "antd";
import FlexBetween from "../../../../components/layout/flex/FlexBetween";
import { FaArrowLeftLong } from "react-icons/fa6";
import Flex from "../../../../components/layout/flex/Flex";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { TransactionApis } from "../../../../apis/transaction";
import { useAppContext } from "../../../../contexts/AppContext";
import { ITransaction } from "../../../../types";
import dayjs from "dayjs";
import { DATE_FORMAT } from "../../../../constants";
import ProductCartInTransaction from "../../../../components/product/cart/InTransaction";

const OrderDetail = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const transactionId = searchParams.get("transactionId");
    const [product, setProduct] = useState<ITransaction>();
    const { getById, updateTransactionById } = TransactionApis;
    const { openNotiError, openNotiSuccess } = useAppContext();
    const { setLoading } = useAppContext();

    const getData = () => {
        if (transactionId) {
            getById(transactionId)
                .then((response) => {
                    setProduct(response?.data);
                })
                .catch((error) => {
                    const { response } = error;

                    openNotiError(response?.data?.message);
                });
        }
    };

    useEffect(() => {
        getData();
    }, [transactionId]);

    const handleBackList = () => {
        searchParams.set("active", "orderList");

        navigate(`?${searchParams.toString()}`);
    };

    const handleTransferProgress = (status: string) => {
        if (transactionId) {
            setLoading(true);
            updateTransactionById(transactionId, { status: status })
                .then(() => {
                    openNotiSuccess("Transfer progress");
                })
                .catch(() => {
                    openNotiError("Transfer progress");
                })
                .finally(() => {
                    setLoading(false);
                    getData();
                });
        }
    };

    return (
        <div className="col-span-4 bg-white p-5 rounded-lg">
            <FlexBetween className="mb-6">
                <Flex
                    className="text-2xl font-medium text-gray-600 mb-5"
                    gap={20}
                >
                    <FaArrowLeftLong
                        onClick={handleBackList}
                        className="cursor-pointer"
                    />
                    Order ID: <span className="text-black">430960</span>
                </Flex>

                <Flex gap={30}>
                    {product?.status !== "return" && (
                        <Button
                            size="large"
                            type="default"
                            onClick={() => handleTransferProgress("return")}
                        >
                            Refund
                        </Button>
                    )}

                    {product?.status === "delivering" && (
                        <Button
                            size="large"
                            type="primary"
                            onClick={() => handleTransferProgress("packed")}
                        >
                            Packed
                        </Button>
                    )}
                </Flex>
            </FlexBetween>

            <div className="info_group">
                <FlexBetween className="mb-3">
                    <p>Status</p>
                    <p className="px-4 py-1 rounded-lg bg-gray-100 font-medium capitalize">
                        {product?.status}
                    </p>
                </FlexBetween>
                <FlexBetween className="mb-3">
                    <p>Purchase date</p>
                    <p className="px-4 py-1 font-medium">
                        {dayjs(product?.date).format(DATE_FORMAT)}
                    </p>
                </FlexBetween>
                <FlexBetween className="mb-3">
                    <p>Invoice</p>
                    <p className="px-4 py-1 font-medium text-primary">
                        {product?.invoice}
                    </p>
                </FlexBetween>
            </div>
            <Divider />

            <div className="info_group">
                <p className="text-2xl font-medium text-gray-600 mb-5">
                    Shipping
                </p>
                <FlexBetween className="mb-3">
                    <p>Courier</p>
                    <p className="px-4 py-1 font-medium">GHN Express</p>
                </FlexBetween>
                <FlexBetween className="mb-3">
                    <p>No. Receipt</p>
                    <p className="px-4 py-1 font-medium text-primary">
                        {product?.receiptNumber}
                    </p>
                </FlexBetween>
                <FlexBetween className="mb-3">
                    <p>Address</p>
                    <p className="px-4 py-1 font-medium">{product?.address}</p>
                </FlexBetween>
            </div>
            <Divider />

            <div className="info_group">
                <p className="text-2xl font-medium text-gray-600 mb-5">
                    Product Detail
                </p>
                {product?.purchasedProducts?.map((item, index) => {
                    return (
                        <ProductCartInTransaction key={index} product={item} />
                    );
                })}
            </div>
            <Divider />

            <div className="info_group">
                <p className="text-2xl font-medium text-gray-600 mb-5">
                    Payment Details
                </p>
                <FlexBetween className="mb-3">
                    <p>Total Shoping</p>
                    <p className="px-4 py-1 font-medium">
                        $ {product?.subTotal}
                    </p>
                </FlexBetween>
                <FlexBetween className="mb-3">
                    <p>Shipping</p>
                    <p className="px-4 py-1 font-medium">
                        $ {product?.shipping}
                    </p>
                </FlexBetween>
                <FlexBetween className="mb-3">
                    <p>Tax</p>
                    <p className="px-4 py-1 font-medium">
                        $ {product?.tax ? product?.tax : 0}
                    </p>
                </FlexBetween>
                <FlexBetween className="mb-3">
                    <p className="text-primary">Discount</p>
                    <p className="px-4 py-1 font-medium text-primary">
                        -$ {product?.discount ? product?.discount : 0}
                    </p>
                </FlexBetween>
            </div>
            <Divider />
            <FlexBetween className="mb-3">
                <p className="font-bold text-xl">Subtotal</p>
                <p className="text-xl px-4 py-1 font-bold">
                    $ {product?.subTotal}
                </p>
            </FlexBetween>

            {product?.status === "completed" && (
                <Button type="default" size="large" block>
                    Refund
                </Button>
            )}
        </div>
    );
};

export default OrderDetail;
