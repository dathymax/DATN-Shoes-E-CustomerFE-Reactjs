import { FC, useEffect, useState } from "react";
import { Button, Divider, Select, message } from "antd";
import FlexBetween from "../../../components/layout/flex/FlexBetween";
import FlexCol from "../../../components/layout/flex/FlexCol";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { OptionProps } from "antd/es/select";
import { UserApis } from "../../../apis/user";
import { TransactionApis } from "../../../apis/transaction";
import { v4 } from "uuid";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppContext } from "../../../contexts/AppContext";
import { CartItem, removeCart } from "../../../store/features/cart";
import { ProductApis } from "../../../apis/product";

interface PriceSummaryProps {
    step: string;
    handleSetStep: (step: string) => void;
}

const PriceSummary: FC<PriceSummaryProps> = ({ step }) => {
    const paymentMethod = useAppSelector((state) => state.cart.paymentMethod);
    const items = useAppSelector((state) => state.cart.items);
    const userInfo = useAppSelector((state) => state.auth.userInfo);
    const [promoCodes, setPromoCodes] = useState<OptionProps[]>([]);
    const { create } = TransactionApis;
    const navigate = useNavigate();
    const { setLoading } = useAppContext();
    const dispatch = useAppDispatch();
    const total = items.reduce(
        (total: number, curr: CartItem) =>
            (total += Number(curr.totalPricePerItem) * Number(curr.quantity)),
        0
    );
    const [searchParams] = useSearchParams();
    const discount = searchParams.get("discount") || 0;
    const discountPrice = (total * Number(discount)) / 100;
    const subTotal = discount !== 0 ? total - discountPrice : total;

    useEffect(() => {
        searchParams.set("discount", "0");
        navigate(`?${searchParams.toString()}`);
    }, []);

    const handleClick = () => {
        const values = {
            customerName: `${userInfo.firstname} ${userInfo.lastname}`,
            phoneNumber: userInfo.phoneNumber,
            address: userInfo.address,
            payment: paymentMethod,
            tax: "",
            userId: userInfo?.id,
            subTotal: subTotal,
            shipping: 0,
            discount: discount,
            extCode: v4(),
            purchasedProducts: items.map((item) => ({
                productId: item.product._id,
                name: item.product.name,
                category: item.product.category,
                sku: "1",
                size: item.size,
                image: item.product.images?.[0]?.fileName,
                color: item.color,
                quantity: item.quantity,
                price: item.product.price,
                total: item.totalPricePerItem,
            })),
        };

        setLoading(true);
        create(values)
            .then(() => {
                items?.map((item) => {
                    ProductApis.updateProductById(item?.product?._id, {
                        quantity:
                            Number(item.product.quantity) -
                            Number(item.quantity),
                    })
                        .then((response) => {
                            console.log(response?.data);
                        })
                        .catch(() => {});
                });
                navigate("/order-success");
                dispatch(removeCart());
            })
            .catch(() => {
                message.error("Order failed!");
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        UserApis.getUserById(userInfo.id).then((response) => {
            setPromoCodes(
                response?.data?.promoCodes?.map((promoCode: OptionProps) => ({
                    label: promoCode?.name,
                    value: promoCode?.discount,
                }))
            );
        });
    }, [userInfo]);

    const handleChangePromoCode = (code: string) => {
        if (code) {
            searchParams.set("discount", code);
        } else {
            searchParams.set("discount", "0");
        }
        navigate(`?${searchParams.toString()}`);
    };

    return (
        <div className="px-4 py-5 rounded-lg bg-white shadow-sm font-medium">
            <h2>Price Summary</h2>
            <div className="h-[25px]"></div>
            <p className="mb-2">Promo Code</p>
            <div className="flex items-center gap-4">
                <Select
                    className="h-[40px] w-full"
                    options={promoCodes}
                    placeholder={"Select promo code"}
                    allowClear
                    onChange={handleChangePromoCode}
                />
            </div>
            <Divider />
            <FlexCol gap={20}>
                <FlexBetween>
                    <p>Total Shopping</p>
                    <p>$ {total}</p>
                </FlexBetween>
                <FlexBetween>
                    <p>Shipping</p>
                    <p>$ 0</p>
                </FlexBetween>
                <FlexBetween>
                    <p>Tax</p>
                    <p>$ 0</p>
                </FlexBetween>
                <FlexBetween className="text-primary">
                    <p>Discount</p>
                    <p>- {discount ? discount : 0}%</p>
                </FlexBetween>
            </FlexCol>
            <Divider />
            <FlexBetween className="text-[20px]">
                <p>Subtotal</p>
                <p>$ {subTotal}</p>
            </FlexBetween>
            <Divider />
            <Button
                block
                type="primary"
                size="large"
                style={{ height: 50 }}
                onClick={() => {
                    handleClick();
                }}
            >
                {step === "first" ? "Continue to payment" : "Confirm payment"}
            </Button>
        </div>
    );
};

export default PriceSummary;
