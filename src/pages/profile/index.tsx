import { useEffect } from "react";
import ProfileContent from "./components/Profile";
import AddressContent from "./components/Address";
import { useNavigate, useSearchParams } from "react-router-dom";
import OrderListContent from "./components/OrderList";
import OrderListTab from "./components/items/OrderListTab";
import { useAppSelector } from "../../store/store";
import OrderDetail from "./components/items/Detail";

const ProfilePage = () => {
    const userInfo = useAppSelector((state) => state.auth.userInfo);
    const [searchParams] = useSearchParams();
    const active = searchParams.get("active") || "profile";
    const navigate = useNavigate();

    const handleSetActive = (type: string) => {
        searchParams.set("active", type);

        navigate(`?${searchParams.toString()}`);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container m-auto py-20">
            <h1>Profile</h1>
            <div className="grid grid-cols-5 gap-5">
                <div className="col-span-1 bg-white p-5 rounded-lg">
                    <ul>
                        <li
                            className={`cursor-pointer mb-5 ${
                                active === "profile"
                                    ? "font-bold text-black"
                                    : "font-medium text-gray-500"
                            }`}
                            onClick={() => handleSetActive("profile")}
                        >
                            Profile
                        </li>
                        <li
                            className={`cursor-pointer ${
                                active === "orderList"
                                    ? "font-bold text-black"
                                    : "font-medium text-gray-500"
                            }`}
                            onClick={() => handleSetActive("orderList")}
                        >
                            Order list
                        </li>
                    </ul>
                </div>
                <div className="col-span-4 grid grid-cols-4 gap-5">
                    {active === "profile" ? (
                        <>
                            <div className="col-span-2 bg-white p-5 rounded-lg">
                                <ProfileContent user={userInfo} />
                            </div>
                            <div className="col-span-2 bg-white p-5 rounded-lg">
                                <AddressContent />
                            </div>
                        </>
                    ) : (
                        <></>
                    )}
                    {active === "orderList" ? (
                        <>
                            <div className="col-span-4 bg-white p-5 rounded-lg">
                                <OrderListTab />
                            </div>
                            <OrderListContent />
                        </>
                    ) : (
                        <></>
                    )}

                    {active === "detail" ? <OrderDetail /> : <></>}
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
