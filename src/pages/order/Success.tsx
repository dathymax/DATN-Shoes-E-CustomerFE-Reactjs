import React from 'react'
import { BsBank, BsCheckCircle } from 'react-icons/bs'
import FlexCol from '../../components/layout/flex/FlexCol'
import FlexCenter from '../../components/layout/flex/FlexCenter'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

const OrderSuccessPage = () => {
    const navigate = useNavigate();

    return (
        <div className='container m-auto p-20'>
            <FlexCol centered className="bg-white m-auto rounded-lg p-5 shadow-sm w-[600px]">
                <BsCheckCircle className="text-green-500 text-[80px] font-medium" />
                <h2 className='font-medium text-center'>Order successful</h2>
                <div className='h-[10px]'></div>
                <div className="rounded-lg w-full bg-gray-50 p-3" style={{ border: "1px solid lightgray" }}>
                    <FlexCenter gap={10}>
                        <BsBank className={"text-2xl"} />
                        VA & Bank Transfer
                    </FlexCenter>
                </div>
                <div className='h-[20px]'></div>
                <Button
                    type='primary'
                    block
                    size='large'
                    onClick={() => navigate("/products")}
                >
                    Continue shopping
                </Button>
            </FlexCol>
        </div>
    )
}

export default OrderSuccessPage