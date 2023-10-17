import React, { useState } from 'react'
import CheckoutPageBreadcrumb from './components/BreadCrumb'
import SummaryOrder from './components/SummaryOrder';
import ShippingDetails from './components/ShippingDetails';
import PriceSummary from './components/PriceSummary';
import PaymentMethod from './components/PaymentMethod';

export interface IStep {
    firstStep?: boolean,
    secondStep?: boolean
}

const CheckoutPage = () => {
    const [activeStep, setActiveStep] = useState<IStep>({ firstStep: false, secondStep: false });

    return (
        <div className='container m-auto py-20'>
            <CheckoutPageBreadcrumb activeStep={activeStep} />
            <div className='h-[30px]'></div>
            <div className='grid grid-cols-12 gap-10'>
                <div className='col-span-7'>
                    {!activeStep.firstStep
                        ? <>
                            <SummaryOrder />
                            <ShippingDetails />
                        </>
                        : <PaymentMethod />}
                </div>
                <div className="col-span-5">
                    <PriceSummary activeStep={activeStep} setActiveStep={setActiveStep} />
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage