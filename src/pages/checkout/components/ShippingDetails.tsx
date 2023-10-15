import { Input } from 'antd'
import React from 'react'

const ShippingDetails = () => {
    return (
        <div className='p-4 mt-4 rounded-lg bg-white shadow-sm font-medium'>
            <h2>Shipping Details</h2>
            <div className='h-[20px]'></div>
            <p className='mb-2'>Address</p>
            <Input className='h-[40px]' placeholder='Add shipping address' />
        </div>
    )
}

export default ShippingDetails