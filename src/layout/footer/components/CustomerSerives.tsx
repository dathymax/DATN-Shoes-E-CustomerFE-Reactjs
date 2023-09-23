import React from "react";
import { Link } from "react-router-dom";

const FooterCustomerSerives = () => {
    const items = [
        {
            key: "Delivery policy",
            href: "delivery-policy",
            label: "Delivery policy",
        },
        {
            key: "Size guide",
            href: "size-guide",
            label: "Size guide",
        },
        {
            key: "Return policy",
            href: "return-policy",
            label: "Return policy",
        },
        {
            key: "Term of services",
            href: "term-of-services",
            label: "Term of services",
        },
    ];

    return (
        <ul>
            <li className="text-white font-medium mb-6">Customer services</li>
            {items.map((item) => {
                return (
                    <li key={item.key} className="my-5">
                        <Link to={item.href} className="text-gray-400">
                            {item.label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default FooterCustomerSerives;
