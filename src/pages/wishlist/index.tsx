import React from 'react'
import ProductCard from '../../components/product/card'
import Product from "../../assets/images/Product.png"
import WishlistEmpty from '../../components/wishlist/Empty';

const WishlistPage = () => {
    const products = [];

    return (
        <div className='container m-auto py-20'>
            <div className="flex items-center justify-between mb-10">
                <h2>My Wishlist</h2>
                <p className='text-red-500'>Remove all</p>
            </div>

            {products.length > 0 ? <div className="grid grid-cols-12 gap-5">
                <div className="col-span-3">
                    <ProductCard img={Product} id={1} isLiked isNew isSoldOut name='Nike Zoom Kd Iii' price={250} />
                </div>
            </div> : <WishlistEmpty />}
        </div>
    )
}

export default WishlistPage