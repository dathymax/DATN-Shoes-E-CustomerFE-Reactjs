import React, { FC, useState } from "react";

interface ITabItem {
    label: string;
    key: string;
    children: React.ReactNode;
}

interface ITabs {
    items: ITabItem[];
}

const Tabs: FC<ITabs> = ({ items = [] }) => {
    const [active, setActive] = useState(0);

    return (
        <>
            <ul className="text-center mb-5">
                {items.map((tab, index) => {
                    return (
                        <li
                            key={tab.key}
                            className={`${
                                active === index
                                    ? "text-black"
                                    : "text-gray-400"
                            } font-bold inline-block mx-3 py-2 cursor-pointer active:opacity-60`}
                            onClick={() => setActive(index)}
                            style={{
                                borderBottom:
                                    active === index
                                        ? "1.5px solid black"
                                        : "1.5px solid lightgray",
                            }}
                        >
                            {tab.label}
                        </li>
                    );
                })}
            </ul>

            {items[active].children}
        </>
    );
};

export default Tabs;
