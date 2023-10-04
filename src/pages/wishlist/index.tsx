import React, { useEffect } from 'react'
import ProductCard from '../../components/product/card'
import WishlistEmpty from '../../components/wishlist/Empty';
import { useAppSelector } from '../../store/store';

const WishlistPage = () => {
    const items = useAppSelector(state => state.products.items);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className='container m-auto py-20'>
            <div className="flex items-center justify-between mb-10">
                <h2>My Wishlist</h2>
                <p className='text-red-500'>Remove all</p>
            </div>

            {items.length > 0 ? <div className="grid grid-cols-12 gap-5">
                {items.map(item => {
                    return (
                        <div key={item._id} className="col-span-3">
                            <ProductCard product={item} />
                        </div>
                    )
                })}
            </div> : <WishlistEmpty />}
        </div>
    )
}

export default WishlistPage