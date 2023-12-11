import { useEffect } from 'react'
import CheckoutPageBreadcrumb from './components/BreadCrumb'
import SummaryOrder from './components/SummaryOrder';
import ShippingDetails from './components/ShippingDetails';
import PriceSummary from './components/PriceSummary';
import PaymentMethod from './components/PaymentMethod';
import { useNavigate, useSearchParams } from 'react-router-dom';

const CheckoutPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const step = searchParams.get("step") || "";

    useEffect(() => {
        searchParams.set("step", "first");
        navigate(`?${searchParams.toString()}`);
    }, [])

    const handleSetStep = (step: string) => {
        searchParams.set("step", step);
        navigate(`?${searchParams.toString()}`);
    }

    return (
        <div className='container m-auto py-20'>
            <CheckoutPageBreadcrumb step={step} />
            <div className='h-[30px]'></div>
            <div className='grid grid-cols-12 gap-10'>
                <div className='col-span-7'>
                    {step === "first"
                        ? <>
                            <SummaryOrder />
                            <ShippingDetails />
                        </>
                        : <PaymentMethod />}
                </div>
                <div className="col-span-5">
                    <PriceSummary step={step} handleSetStep={handleSetStep} />
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage