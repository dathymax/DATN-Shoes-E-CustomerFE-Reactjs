import React from "react";
import Fire from "../../../../assets/images/Fire.png";
import { Link } from "react-router-dom";
import "./index.css";

const navItems = [
    {
        key: "newArrived",
        label: (
            <p className="flex items-center justify-center gap-1">
                New Arrived <img src={Fire} alt="Fire" className="mb-1" />
            </p>
        ),
        href: "new-arrived",
    },
    {
        key: "newArrived",
        label: <>Men</>,
        href: "new-arrived",
    },
    {
        key: "newArrived",
        label: <>Women</>,
        href: "new-arrived",
    },
    {
        key: "newArrived",
        label: <>Kids</>,
        href: "new-arrived",
    },
] as { key: string; label: React.ReactNode; href: string }[];

const Navigation = () => {
    return (
        <ul>
            {navItems.map((nav) => {
                return (
                    <li key={nav.key} className="nav__item inline-block px-5">
                        <Link to={nav.href} className="text-white no-underline">
                            {nav.label}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default Navigation;
