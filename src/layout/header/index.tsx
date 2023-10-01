import React from "react";
import SaleNotification from "../../components/feedback/notification/sale";
import Logo from "../../assets/images/Logo.png";
import { Dropdown, Input, Modal, Spin } from "antd";
import Authenticate from "../../components/authenticate";
import Navigation from "./components/navigation";
import Heart from "../../assets/images/Heart.png";
import Search from "../../assets/images/Search.png";
import HeaderCart from "./components/navigation/Cart";
import { useAppContext } from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { logout } from "../../apis/auth";
import { AiOutlineUser } from "react-icons/ai";
import { getUserInfo } from "../../helpers";

const Header = () => {
    const navigate = useNavigate();
    const userInfo = getUserInfo();
    const {
        loading,
        openAuthen: open,
        setOpenAuthen: setOpen,
    } = useAppContext();
    const items = [
        {
            label: userInfo?.email,
            key: "email",
            onClick: () => navigate(`/profile/${userInfo?.id}`),
        },
        { type: "divider" },
        {
            label: "My wishlist",
            key: "my-wishlist",
            onClick: () => navigate("/wishlist"),
        },
        { type: "divider" },
        {
            label: "Logout",
            key: "logout",
            danger: true,
            onClick: () => {
                logout();
                window.location.reload()
            },
        },
    ];

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
                        <img
                            src={Logo}
                            alt="Logo"
                            onClick={() => navigate("/")}
                            className="cursor-pointer"
                        />
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
                        {userInfo?.email ? (
                            <Dropdown
                                menu={{
                                    items,
                                }}
                                trigger={["click"]}
                            >
                                <p>
                                    <AiOutlineUser className="text-white cursor-pointer text-[25px]" />
                                </p>
                            </Dropdown>
                        ) : (
                            <p
                                className="text-white cursor-pointer"
                                onClick={handleOpen}
                            >
                                Sign in
                            </p>
                        )}
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
                maskClosable={!loading}
            >
                <Spin spinning={loading}>
                    <Authenticate />
                </Spin>
            </Modal>
        </header>
    );
};

export default Header;
