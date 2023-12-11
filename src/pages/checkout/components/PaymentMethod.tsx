import { BsBank, BsCash, BsWallet } from "react-icons/bs";
import FlexCenter from "../../../components/layout/flex/FlexCenter";
import FlexBetween from "../../../components/layout/flex/FlexBetween";
import { Collapse, Radio } from "antd";
import { RiVisaLine } from "react-icons/ri";
import Flex from "../../../components/layout/flex/Flex";
import Momo from "../../../assets/icons/momo.png";
import Moca from "../../../assets/icons/moca.png";
import Payoo from "../../../assets/icons/payoo.png";
import { useAppDispatch, useAppSelector } from "../../../store/store";
import { setPaymentMethod } from "../../../store/features/cart";

const PaymentMethod = () => {
    const dispatch = useAppDispatch();
    const paymentMethod = useAppSelector((state) => state.cart.paymentMethod);

    const handleSetPaymentMethod = (method: string) => {
        dispatch(setPaymentMethod({ method }));
    };

    return (
        <div className="p-4 rounded-lg bg-white shadow-sm">
            <h2>Payment Method</h2>
            <div className="h-[30px]"></div>
            <Radio.Group
                defaultValue={paymentMethod}
                className="w-full"
                onChange={(e) => handleSetPaymentMethod(e.target.value)}
            >
                <FlexBetween
                    className="rounded-lg py-3 px-4 bg-gray-50"
                    style={{ border: "1px solid lightgray" }}
                >
                    <Radio value={"cash"}>
                        <FlexCenter gap={10} className="mt-1 ml-1">
                            <BsCash className={"text-2xl"} />
                            <p className="mb-0.5 font-medium">
                                Payment on delivery
                            </p>
                        </FlexCenter>
                    </Radio>
                </FlexBetween>

                <div className="h-[10px]"></div>

                <Collapse
                    defaultActiveKey={["bank"]}
                    expandIconPosition={"end"}
                >
                    <Collapse.Panel
                        key="bank"
                        header={
                            <FlexBetween>
                                <FlexCenter gap={10}>
                                    <BsBank className={"text-2xl"} />
                                    <p className="mb-0.5 font-medium">
                                        VA & Bank Transfer
                                    </p>
                                </FlexCenter>
                            </FlexBetween>
                        }
                    >
                        <Radio value={"visa"}>
                            <FlexBetween>
                                <RiVisaLine className="text-3xl text-blue-600 mt-1.5" />
                            </FlexBetween>
                        </Radio>
                    </Collapse.Panel>
                </Collapse>

                <div className="h-[10px]"></div>

                <Collapse
                    defaultActiveKey={["eWallet"]}
                    expandIconPosition={"end"}
                >
                    <Collapse.Panel
                        key="eWallet"
                        header={
                            <Flex gap={10}>
                                <BsWallet className={"text-2xl"} />
                                <p className="mb-0.5 font-medium">E-Wallet</p>
                            </Flex>
                        }
                    >
                        <Radio value={"momo"}>
                            <img src={Momo} />
                        </Radio>
                        <div className="h-[20px]"></div>
                        <Radio value={"moca"}>
                            <img src={Moca} />
                        </Radio>
                        <div className="h-[20px]"></div>
                        <Radio value={"payoo"}>
                            <img src={Payoo} />
                        </Radio>
                    </Collapse.Panel>
                </Collapse>
            </Radio.Group>
        </div>
    );
};

export default PaymentMethod;
