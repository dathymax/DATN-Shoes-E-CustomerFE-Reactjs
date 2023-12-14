import { FC, useEffect, useState } from "react";
import { ITransaction, IUser } from "../../../types";
import { useNavigate, useSearchParams } from "react-router-dom";
import FlexBetween from "../../../components/layout/flex/FlexBetween";
import { Button } from "antd";
import { TransactionApis } from "../../../apis/transaction";
import { useAppContext } from "../../../contexts/AppContext";
import { useAppSelector } from "../../../store/store";
import ProductCartInTransaction from "../../../components/product/cart/InTransaction";
import { convertStatus } from "../../../helpers";

interface OrderListContentProps {
    user?: IUser;
}

const OrderListContent: FC<OrderListContentProps> = () => {
    const [searchParams] = useSearchParams();
    const orderListTabKey = searchParams.get("orderListTabKey") || "";
    const [items, setItems] = useState<ITransaction[]>([]);
    const { getAll } = TransactionApis;
    const { openNotiError } = useAppContext();
    const userInfo = useAppSelector((state) => state.auth.userInfo);
    const navigate = useNavigate();

    useEffect(() => {
        getAll()
            .then((response) => {
                const data = response?.data;

                if (!orderListTabKey || orderListTabKey === "all") {
                    setItems(
                        data?.filter(
                            (item: ITransaction) => item?.userId === userInfo.id
                        )
                    );
                } else {
                    setItems(
                        data?.filter(
                            (item: ITransaction) =>
                                item?.userId === userInfo.id &&
                                item?.status === orderListTabKey
                        )
                    );
                }
            })
            .catch(() => {
                openNotiError("Get all transaction");
            });
    }, [orderListTabKey]);

    const handleShowDetail = (transactionId?: string) => {
        searchParams.set("active", "detail");

        navigate(`?${searchParams.toString()}&transactionId=${transactionId}`);
    };

    return items?.map((order) => (
        <div className="col-span-4 bg-white p-5 rounded-lg">
            <FlexBetween className="mb-5">
                <p className="text-2xl font-medium text-gray-600">
                    Order ID: <span className="text-black">430960</span>
                </p>
                <p className="px-4 py-1 rounded-lg bg-gray-100 font-medium">
                    {convertStatus(order?.status)}
                </p>
            </FlexBetween>

            {order?.purchasedProducts?.map((product, index) => {
                return (
                    <ProductCartInTransaction key={index} product={product} />
                );
            })}

            <div className="text-right">
                <Button
                    type="primary"
                    size="large"
                    onClick={() => handleShowDetail(order?._id)}
                >
                    Detail
                </Button>
            </div>
        </div>
    ));
};

export default OrderListContent;
