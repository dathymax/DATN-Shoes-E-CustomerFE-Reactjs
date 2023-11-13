import { useAppSelector } from '../../../store/store';
import { Divider } from 'antd';
import ProductCartOrdered from '../../../components/product/cart/Ordered';

const SummaryOrder = () => {
    const items = useAppSelector(state => state.cart.items);

    return (
        <div className='p-4 rounded-lg bg-white shadow-sm'>
            <h2>Summary Order</h2>
            <div className='h-[30px]'></div>
            {items.map((cartItem, index) => {
                return (
                    <div key={`${cartItem?.product?._id}/${index}/${cartItem?.product?.price}`}>
                        <div className="grid grid-cols-6 gap-3 text-left mb-7">
                            <div className="col-span-3">
                                <ProductCartOrdered cartItem={cartItem} />
                            </div>
                            <div className="col-span-3 flex items-center justify-center gap-10">
                                <div className='flex items-center rounded-lg px-3 py-2 font-medium' style={{ border: "1px solid lightgray" }}>
                                    {cartItem?.quantity}
                                    <p className='mx-2'> x </p>
                                    $ {cartItem?.product?.price}
                                </div>
                                <p className='font-medium'>$ {cartItem?.totalPricePerItem}</p>
                            </div>
                        </div>
                        <Divider />
                    </div>
                )
            })}
        </div>
    )
}

export default SummaryOrder