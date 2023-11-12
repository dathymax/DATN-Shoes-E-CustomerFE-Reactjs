import React, { FC } from 'react'
import { IUser } from '../../../types'
import { useSearchParams } from 'react-router-dom'
import FlexBetween from '../../../components/layout/flex/FlexBetween'
import ProductCartOrdered from '../../../components/product/cart/Ordered'
import { useAppSelector } from '../../../store/store'
import { Button } from 'antd'

interface OrderListContentProps {
    user?: IUser
}

const OrderListContent: FC<OrderListContentProps> = ({ user }) => {
    const [searchParams] = useSearchParams();
    const orderListTabKey = searchParams.get("orderListTabKey") || "";
    const items = useAppSelector(state => state.cart.items);

    return (
        items.map(order => (
            <div className='col-span-4 bg-white p-5 rounded-lg'>
                <FlexBetween className='mb-5'>
                    <p className='text-2xl font-medium text-gray-600'>
                        Order ID: <span className='text-black'>430960</span>
                    </p>
                    <p className='px-4 py-1 rounded-lg bg-gray-100 font-medium'>In Delivery</p>
                </FlexBetween>

                <ProductCartOrdered cartItem={order} />

                <div className='text-right'>
                    <Button type='primary' size='large'>Detail</Button>
                </div>
            </div>
        ))
    )
}

export default OrderListContent