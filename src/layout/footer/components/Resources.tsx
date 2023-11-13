import { Link } from "react-router-dom";

const FooterResources = () => {
    const items = [
        {
            key: "News",
            href: "news",
            label: "News",
        },
        {
            key: "Events",
            href: "events",
            label: "Events",
        },
        {
            key: "Support",
            href: "support",
            label: "Support",
        },
    ];

    return (
        <ul>
            <li className="text-white font-medium mb-6">Resources</li>
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

export default FooterResources;
