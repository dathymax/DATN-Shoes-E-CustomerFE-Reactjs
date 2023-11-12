import { Tabs } from 'antd';
import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const OrderListTab = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const items = [
        {
            key: 'all',
            label: 'All',
        },
        {
            key: 'waitingPayment',
            label: 'Waiting Payment',
        },
        {
            key: 'orderOnProcess',
            label: 'Order On Process',
        },
        {
            key: 'inDelivery',
            label: 'In Delivery',
        },
        {
            key: 'completeOrder',
            label: 'Complete Order',
        },
        {
            key: 'refund',
            label: 'Refund',
        },
    ];

    const onChange = (key: string) => {
        searchParams.set("orderListTabKey", key);

        navigate(`?${searchParams.toString()}`);
    };

    useEffect(() => {
        navigate(`?orderListTabKey=all`);
    }, [])

    return (
        <>
            <h2 className='text-2xl font-medium'>Order List</h2>
            <Tabs defaultActiveKey="all" items={items} onChange={onChange} />
        </>
    )
}

export default OrderListTab