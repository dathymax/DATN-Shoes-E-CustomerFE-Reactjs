import React from 'react'
import NavBar from '../../components/navigation/nav'
import SaleNotification from '../../components/feedback/notification/sale'
import Logo from "../../assets/images/Logo.png";

const Header = () => {
    return (
        <header>
            <SaleNotification />
            <div className="bg-[var(--second-black)]">
                <div className='container m-auto flex items-center py-[16px]'>
                    <img src={Logo} alt="Logo" />
                </div>
            </div>
        </header>
    )
}

export default Header