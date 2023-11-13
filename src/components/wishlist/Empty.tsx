import Empty from "../../assets/images/wishlist/Empty.png"
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const WishlistEmpty = () => {
    const navigate = useNavigate();

    return (
        <div className="w-[400px] m-auto leading-[40px] text-center">
            <img src={Empty} alt="Empty" />
            <p className='text-[20px] font-bold leading-[30px]'>Empty Wishlist</p>
            <p className='text-gray-500'>You don't have any products in your wishlist.</p>
            <Button block type='primary' onClick={() => navigate("/products")} className='h-[50px]'>
                Continue shopping
            </Button>
        </div>
    )
}

export default WishlistEmpty