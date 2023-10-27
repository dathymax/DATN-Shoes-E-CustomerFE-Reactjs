import React, { FC, useEffect, useState } from "react";
import { Button, Divider, Select } from "antd";
import FlexBetween from "../../../components/layout/flex/FlexBetween";
import FlexCol from "../../../components/layout/flex/FlexCol";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { OptionProps } from "antd/es/select";
import { UserApis } from "../../../apis/user";
import { addPromoCodes } from "../../../store/features/cart";

interface PriceSummaryProps {
    step: string;
    handleSetStep: (step: string) => void;
}

const PriceSummary: FC<PriceSummaryProps> = ({ step }) => {
    const dispatch = useAppDispatch();
    const paymentMethod = useAppSelector((state) => state.cart.paymentMethod);
    const items = useAppSelector((state) => state.cart.items);
    const userInfo = useAppSelector((state) => state.auth.userInfo);
    const [promoCodes, setPromoCodes] = useState<OptionProps[]>([]);
    const [promoCodesSelected, setPromoCodesSelected] = useState<string[]>([]);

    const handleClick = () => {
        console.log({ items, paymentMethod });
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

    const handleAddPromoCodes = () => {
        dispatch(addPromoCodes(promoCodesSelected));
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
                    mode="multiple"
                    maxTagCount={"responsive"}
                    allowClear
                    onSelect={(values) => setPromoCodesSelected(values)}
                />
                <Button
                    type="primary"
                    size="large"
                    style={{ height: 40, width: 100 }}
                    onClick={handleAddPromoCodes}
                >
                    Add
                </Button>
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
