import React from 'react'

function ProductCartSubTotal() {
    return (
        <div>
            <div className="flex items-center justify-between mb-3 text-[20px] mt-5">
                <h3>Subtotal</h3>
                <p className='font-bold'>
                    $ 0
                </p>
            </div>
            <p>Taxes and shipping fee will be calculated at checkout</p>
        </div>
    )
}

export default ProductCartSubTotal