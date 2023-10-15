import React, { Dispatch, FC, SetStateAction } from 'react'
import { Button, Divider, Input } from 'antd'
import FlexBetween from '../../../components/layout/flex/FlexBetween'
import FlexCol from '../../../components/layout/flex/FlexCol'
import { IStep } from '..'

interface PriceSummaryProps {
    activeStep: IStep,
    setActiveStep: Dispatch<SetStateAction<IStep>>,
}

const PriceSummary: FC<PriceSummaryProps> = ({ activeStep, setActiveStep }) => {
    return (
        <div className='px-4 py-5 rounded-lg bg-white shadow-sm font-medium'>
            <h2>Price Summary</h2>
            <div className='h-[25px]'></div>
            <p className='mb-2'>Promo Code</p>
            <div className="flex items-center gap-4">
                <Input className='h-[40px]' />
                <Button type='primary' size='large' style={{ height: 40, width: 100 }}>
                    Add
                </Button>
            </div>
            <Divider />
            <FlexCol gap={20} >
                <FlexBetween><p>Total Shopping</p><p>$ 1,800.00</p></FlexBetween>
                <FlexBetween><p>Shipping</p><p>$ 10.00</p></FlexBetween>
                <FlexBetween><p>Tax</p><p>$ 10.00</p></FlexBetween>
                <FlexBetween className='text-primary'><p>Discount</p><p>-$ 50.00</p></FlexBetween>
            </FlexCol>
            <Divider />
            <FlexBetween className='text-[20px]'><p>Subtotal</p><p>$ 1,770.00</p></FlexBetween>
            <Divider />
            <Button
                block
                type='primary'
                size='large'
                style={{ height: 50 }}
                onClick={() => {
                    if (!activeStep.firstStep) {
                        setActiveStep({ firstStep: true, secondStep: true })
                    }
                }}
            >
                {!activeStep.firstStep ? "Continue to payment" : "Confirm payment"}
            </Button>
        </div>
    )
}

export default PriceSummary