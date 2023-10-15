import React, { FC } from 'react'
import { GrLinkNext } from 'react-icons/gr'
import { IStep } from '..';
import { AiFillCheckSquare } from 'react-icons/ai';

interface CheckoutPageBreadcrumbProps {
    activeStep: IStep
}

const CheckoutPageBreadcrumb: FC<CheckoutPageBreadcrumbProps> = ({ activeStep }) => {
    const checkFirstStep = activeStep.firstStep;
    const checkSecondStep = activeStep.secondStep;

    return (
        <div
            className='flex items-center gap-10 cursor-not-allowed select-none'
            onClick={(e) => e.preventDefault()}
        >
            <div className={`flex items-center gap-2 font-medium ${checkFirstStep ? "text-primary" : ""}`}>
                {!checkFirstStep ? <p className={`bg-gray-700 rounded-full text-center w-[25px] text-white h-[25px] flex items-center justify-center`}>
                    1
                </p> : <AiFillCheckSquare />}
                Shipping details
            </div>
            <GrLinkNext />
            <div className={`flex items-center gap-2 ${checkSecondStep ? "text-gray-500" : "text-gray-400"} font-medium`}>
                <p className={`${checkSecondStep ? "bg-gray-500" : "bg-gray-400"} rounded-full text-center w-[25px] text-white h-[25px] flex items-center justify-center`}>
                    2
                </p>
                Payment methods
            </div>
        </div>
    )
}

export default CheckoutPageBreadcrumb