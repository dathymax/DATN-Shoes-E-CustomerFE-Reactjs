import React from "react";
import FooterAddress from "./components/Address";
import FooterSneakers from "./components/Sneakers";
import FooterCustomerSerives from "./components/CustomerSerives";
import FooterResources from "./components/Resources";
import FooterContact from "./components/Contact";

const Footer = () => {
    return (
        <footer>
            <div className="bg-black">
                <div className="container m-auto py-20 grid grid-cols-12 gap-10">
                    <FooterAddress />
                    <div className="col-span-2">
                        <FooterSneakers />
                    </div>
                    <div className="col-span-2">
                        <FooterCustomerSerives />
                    </div>
                    <div className="col-span-2">
                        <FooterResources />
                    </div>
                    <div className="col-span-3">
                        <FooterContact />
                    </div>
                </div>
            </div>
            <div className="bg-[#1b1b1b] text-center py-4 text-gray-400">
                Copyright © 2020 - 2021 Sneakers. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
