import React, { FC } from "react";
import { Button, Divider, Input, Select } from "antd";
import FlexBetween from "../../../components/layout/flex/FlexBetween";
import FlexCol from "../../../components/layout/flex/FlexCol";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../store/store";

interface PriceSummaryProps {
    step: string;
    handleSetStep: (step: string) => void;
}

const PriceSummary: FC<PriceSummaryProps> = ({ step, handleSetStep }) => {
    const navigate = useNavigate();
    const paymentMethod = useAppSelector(
        (state) => state.payment.paymentMethod
    );
    const items = useAppSelector((state) => state.cart.items);

    const handleClick = () => {
        console.log({ items, paymentMethod });
    };

    return (
        <div className="px-4 py-5 rounded-lg bg-white shadow-sm font-medium">
            <h2>Price Summary</h2>
            <div className="h-[25px]"></div>
            <p className="mb-2">Promo Code</p>
            <div className="flex items-center gap-4">
                <Select
                    className="h-[40px] w-full"
                    options={[{ label: "1", value: 1 }]}
                    placeholder={"Select promo code"}
                    mode="multiple"
                    maxTagCount={"responsive"}
                    allowClear
                />
                <Button
                    type="primary"
                    size="large"
                    style={{ height: 40, width: 100 }}
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
                    // if (step === "first") {
                    //     handleSetStep("second");
                    // } else if (step === "second" && paymentMethod !== "") {
                    //     navigate("/order-success");
                    // }
                    handleClick();
                }}
            >
                {step === "first" ? "Continue to payment" : "Confirm payment"}
            </Button>
        </div>
    );
};

export default PriceSummary;
