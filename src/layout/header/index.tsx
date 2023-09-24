import React, { useState } from "react";
import SaleNotification from "../../components/feedback/notification/sale";
import Logo from "../../assets/images/Logo.png";
import { Input, Modal } from "antd";
import Authenticate from "../../components/authenticate";
import Navigation from "./components/navigation";
import Heart from "../../assets/images/Heart.png";
import Search from "../../assets/images/Search.png";
import HeaderCart from "./components/navigation/Cart";

const Header = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <header>
            <SaleNotification />
            <div className="bg-[var(--second-black)]">
                <div className="container m-auto flex items-center justify-between py-[16px]">
                    <div className="flex items-center gap-10">
                        <img src={Logo} alt="Logo" />
                        <Navigation />
                    </div>
                    <div className="user__action flex items-center gap-5">
                        <div className="flex items-center gap-2">
                            <img src={Search} alt="Search" />
                            <Input
                                bordered={false}
                                className="text-white placeholder:text-gray-400"
                                placeholder="Search product"
                            />
                        </div>
                        <img src={Heart} alt="Heart" />
                        <HeaderCart />
                        <p
                            className="text-white cursor-pointer"
                            onClick={handleOpen}
                        >
                            Sign in
                        </p>
                    </div>
                </div>
            </div>

            <Modal
                open={open}
                onCancel={handleClose}
                footer={null}
                bodyStyle={{
                    padding: "20px 20px 0 20px",
                }}
                destroyOnClose
            >
                <Authenticate />
            </Modal>
        </header>
    );
};

export default Header;
