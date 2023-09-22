import React, { useState } from "react";
import SaleNotification from "../../components/feedback/notification/sale";
import Logo from "../../assets/images/Logo.png";
import { Modal } from "antd";
import Authenticate from "../../components/authenticate";

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
                    <div>
                        <img src={Logo} alt="Logo" />
                    </div>
                    <div className="user__action">
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
                    padding: 20,
                }}
            >
                <Authenticate />
            </Modal>
        </header>
    );
};

export default Header;
