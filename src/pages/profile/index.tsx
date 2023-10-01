import React, { useEffect, useState } from 'react'
import ProfileContent from './components/Profile';
import AddressContent from './components/Address';
import { useParams } from 'react-router-dom';
import { getUserInfo } from '../../helpers';
import { UserApis } from '../../apis/user';

const ProfilePage = () => {
    const { id } = useParams();
    const userInfo = getUserInfo();
    const [user, setUser] = useState({});
    const [active, setActive] = useState("profile");

    const handleSetActive = (type: string) => {
        setActive(type);
    }

    useEffect(() => {
        if (id || userInfo?.id) {
            UserApis.getUserById(id || userInfo?.id).then(response => {
                setUser(response?.data);
            })
        }
    }, [id, userInfo?.id])

    return (
        <div className='container m-auto py-20'>
            <h1>Profile</h1>
            <div className="grid grid-cols-5 gap-5">
                <div className="col-span-1 bg-white p-5 rounded-lg">
                    <ul>
                        <li
                            className={`cursor-pointer mb-5 ${active === "profile" ? "font-bold text-black" : "font-medium text-gray-500"}`}
                            onClick={() => handleSetActive("profile")}
                        >
                            Profile
                        </li>
                        <li
                            className={`cursor-pointer ${active === "orderList" ? "font-bold text-black" : "font-medium text-gray-500"}`}
                            onClick={() => handleSetActive("orderList")}
                        >
                            Order list
                        </li>
                    </ul>
                </div>
                <div className="col-span-2 bg-white p-5 rounded-lg">
                    {active === "profile" ? <ProfileContent user={user} /> : <></>}
                </div>
                <div className="col-span-2 bg-white p-5 rounded-lg">
                    {active === "profile" ? <AddressContent /> : <></>}
                </div>
            </div>
        </div>
    )
}

export default ProfilePage