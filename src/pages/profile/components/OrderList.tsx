import { FC, useEffect, useState } from 'react'
import { ITransaction, IUser } from '../../../types'
import { useSearchParams } from 'react-router-dom'
import FlexBetween from '../../../components/layout/flex/FlexBetween'
import ProductCartOrdered from '../../../components/product/cart/Ordered'
import { Button } from 'antd'
import { TransactionApis } from '../../../apis/transaction'
import { useAppContext } from '../../../contexts/AppContext'
import { useAppSelector } from '../../../store/store'

interface OrderListContentProps {
    user?: IUser
}

const OrderListContent: FC<OrderListContentProps> = ({ user }) => {
    const [searchParams] = useSearchParams();
    const orderListTabKey = searchParams.get("orderListTabKey") || "";
    const [items, setItems] = useState<ITransaction[]>([]);
    const { getAll } = TransactionApis;
    const { openNotiError } = useAppContext();
    const userInfo = useAppSelector(state => state.auth.userInfo);

    useEffect(() => {
        getAll(user?._id).then(response => {
            const data = response?.data;

            if (orderListTabKey === "all") {
                setItems(data?.filter((item: ITransaction) => item?.userId === userInfo.id));
            } else {
                setItems(data?.filter((item: ITransaction) => item?.userId === userInfo.id && item?.status === orderListTabKey));
            }
        }).catch((error) => {
            const { response } = error;
            openNotiError(response?.data?.message);
        });
    }, [orderListTabKey])

    return (
        items?.map(order => (
            <div className='col-span-4 bg-white p-5 rounded-lg'>
                <FlexBetween className='mb-5'>
                    <p className='text-2xl font-medium text-gray-600'>
                        Order ID: <span className='text-black'>430960</span>
                    </p>
                    <p className='px-4 py-1 rounded-lg bg-gray-100 font-medium'>In Delivery</p>
                </FlexBetween>

                {order?.purchasedProducts?.map((product, index) => {
                    return (
                        <ProductCartOrdered key={index} product={product} />
                    )
                })}


                <div className='text-right'>
                    <Button type='primary' size='large'>Detail</Button>
                </div>
            </div>
        ))
    )
}

export default OrderListContent