import { Select } from "antd";
import React, { useEffect, useState } from "react";
import { IAddressShipping } from "../../../types";
import { AddressShippingApis } from "../../../apis/address-shipping";
import { useAppSelector } from "../../../store/store";

const ShippingDetails = () => {
    const userInfo = useAppSelector((state) => state.auth.userInfo);
    const [addresses, setAddresses] = useState<IAddressShipping[]>([]);
    const { getAddressShippingByUserId } = AddressShippingApis;

    const mapOptions = (options: IAddressShipping[]) => {
        return options?.map((option) => ({
            label: `${option?.district}, ${option?.province}, ${option?.city}, ${option?.country}`,
            value: `${option?.district}, ${option?.province}, ${option?.city}, ${option?.country}`,
        }));
    };

    useEffect(() => {
        getAddressShippingByUserId(userInfo.id)
            .then((response) => {
                setAddresses(response?.data);
            })
            .catch(() => {});
    }, []);

    return (
        <div className="p-4 mt-4 rounded-lg bg-white shadow-sm font-medium">
            <h2>Shipping Details</h2>
            <div className="h-[20px]"></div>
            <p className="mb-2">Address</p>
            <Select
                className="w-full"
                size="large"
                placeholder="Choose shipping address"
                options={mapOptions(addresses)}
            />
        </div>
    );
};

export default ShippingDetails;
