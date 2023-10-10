import React from 'react'
import { AiOutlineHeart } from "react-icons/ai"
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
    const navigate = useNavigate();

    return (
        <div>
            <AiOutlineHeart className="cursor-pointer text-white text-[25px]" onClick={() => navigate("/wishlist")} />
        </div>
    )
}

export default Wishlist