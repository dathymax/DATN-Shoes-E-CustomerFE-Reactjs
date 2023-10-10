import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/product/card'
import WishlistEmpty from '../../components/wishlist/Empty';
import { useAppSelector } from '../../store/store';
import { WishlistApis } from '../../apis/user';
import { useAppContext } from '../../contexts/AppContext';
import { IWishlistShoe } from '../../types';

const WishlistPage = () => {
    const user = useAppSelector(state => state.auth.userInfo);
    const [items, setItems] = useState<IWishlistShoe[]>([]);
    const { openNotiError } = useAppContext();

    useEffect(() => {
        WishlistApis.getWishlistShoeByUserId(user?.id).then(response => {
            setItems(response?.data);
        }).catch(() => {
            setItems([]);
            openNotiError("Get wishlist");
        })
    }, [])

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