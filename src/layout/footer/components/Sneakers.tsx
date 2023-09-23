import React from "react";
import { Link } from "react-router-dom";

const FooterSneakers = () => {
    const items = [
        {
            key: "About us",
            href: "about-us",
            label: "About us",
        },
        {
            key: "Showrooms",
            href: "showrooms",
            label: "Showrooms",
        },
        {
            key: "Contact",
            href: "contact",
            label: "Contact",
        },
        {
            key: "FAQs",
            href: "faqs",
            label: "FAQs",
        },
    ];

    return (
        <ul>
            <li className="text-white font-medium mb-6">Sneakers</li>
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

export default FooterSneakers;
