import React, { FC } from 'react'
import Remove from "../../../assets/images/cart/Remove.png"
import { Button } from 'antd'
import { useAppDispatch } from '../../../store/store'
import { removeFromCart } from '../../../store/features/cart'

interface IProductCartRemove {
    index: number
    onCancel: () => void
}

const ProductCartRemove: FC<IProductCartRemove> = ({ index, onCancel }) => {
    const dispatch = useAppDispatch();

    const handleRemoveFromCart = () => {
        dispatch(removeFromCart({ index }));
        onCancel();
    }

    return (
        <div className='text-center'>
            <img src={Remove} alt='Remove' />
            <h2>Remove product from cart</h2>
            <p className='text-gray-500'>Are you sure you want to remove the product
                from the cart?</p>
            <div className="flex items-center justify-center gap-3 mt-5">
                <Button
                    type='default'
                    block
                    className='h-[50px] bg-red-600 text-white'
                    onClick={handleRemoveFromCart}
                >
                    Remove
                </Button>
                <Button block className='h-[50px]' onClick={onCancel}>
                    Cancel
                </Button>
            </div>
        </div>
    )
}

export default ProductCartRemove