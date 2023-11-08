import React, { FC, useEffect, useState } from "react";
import { Button, Divider, Select, message } from "antd";
import FlexBetween from "../../../components/layout/flex/FlexBetween";
import FlexCol from "../../../components/layout/flex/FlexCol";
import { useAppSelector } from "../../../store/store";
import { OptionProps } from "antd/es/select";
import { UserApis } from "../../../apis/user";
import { TransactionApis } from "../../../apis/transaction";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";

interface PriceSummaryProps {
    step: string;
    handleSetStep: (step: string) => void;
}

const PriceSummary: FC<PriceSummaryProps> = ({ step }) => {
    const paymentMethod = useAppSelector((state) => state.cart.paymentMethod);
    const items = useAppSelector((state) => state.cart.items);
    const userInfo = useAppSelector((state) => state.auth.userInfo);
    const [promoCodes, setPromoCodes] = useState<OptionProps[]>([]);
    const [promoCode, setPromoCode] = useState<string>();
    const { create } = TransactionApis;
    const navigate = useNavigate();

    const handleClick = () => {
        const values = {
            customerName: `${userInfo.firstname} ${userInfo.lastname}`,
            phoneNumber: userInfo.phoneNumber,
            address: userInfo.address,
            payment: paymentMethod,
            tax: "",
            subTotal: items.reduce((prev, curr) => Number(curr.totalPricePerItem) + Number(prev), 0),
            shipping: 0,
            discount: promoCode,
            extCode: v4(),
            purchasedProducts: items.map(item => ({
                name: item.product.name,
                category: item.product.category,
                sku: 1,
                size: item.size,
                image: item.product.images?.[0],
                color: item.color,
                quantity: item.quantity,
                price: item.product.price,
                total: item.totalPricePerItem,
            }))
        }

        create(values).then(() => {
            navigate("/order-success");
        }).catch(() => {
            message.error("Order failed!");
        })
    };

    useEffect(() => {
        UserApis.getUserById(userInfo.id).then((response) => {
            setPromoCodes(
                response?.data?.promoCodes?.map((promoCode: OptionProps) => ({
                    label: promoCode?.name,
                    value: promoCode?._id,
                }))
            );
        });
    }, [userInfo]);

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
                    onChange={(values) => setPromoCode(values)}
                />
            </div>
            <Divider />
            <FlexCol gap={20}>
                <FlexBetween>
                    <p>Total Shopping</p>
                    <p>$ 1,800.00</p>
                </FlexBetween>
                <FlexBetween>
                    <p>Shipping</p>
                    <p>$ 10.00</p>
                </FlexBetween>
                <FlexBetween>
                    <p>Tax</p>
                    <p>$ 10.00</p>
                </FlexBetween>
                <FlexBetween className="text-primary">
                    <p>Discount</p>
                    <p>-$ 50.00</p>
                </FlexBetween>
            </FlexCol>
            <Divider />
            <FlexBetween className="text-[20px]">
                <p>Subtotal</p>
                <p>$ 1,770.00</p>
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
