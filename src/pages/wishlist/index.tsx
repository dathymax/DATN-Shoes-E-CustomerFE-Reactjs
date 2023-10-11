import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/product/card'
import WishlistEmpty from '../../components/wishlist/Empty';
import { useAppSelector } from '../../store/store';
import { useAppContext } from '../../contexts/AppContext';
import { IWishlistShoe } from '../../types';
import { WishlistApis } from '../../apis/wishlist';
import { Spin } from 'antd';

const WishlistPage = () => {
    const user = useAppSelector(state => state.auth.userInfo);
    const [items, setItems] = useState<IWishlistShoe[]>([]);
    const { openNotiError } = useAppContext();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        WishlistApis.getWishlistShoeByUserId(user?.id).then(response => {
            setItems(response?.data);
            setLoading(false);
        }).catch(() => {
            setItems([]);
            setLoading(false);
            openNotiError("Get wishlist");
        })
    }, [])

    return (
        <Spin spinning={loading}>
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
        </Spin>
    )
}

export default WishlistPage