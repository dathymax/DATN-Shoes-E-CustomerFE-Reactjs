import Logo from "../../../assets/images/LogooFooter.png";
import Instagram from "../../../assets/images/Instagram.png";
import Facebook from "../../../assets/images/Facebook.png";
import Tiktok from "../../../assets/images/Tiktok.png";
import Twitter from "../../../assets/images/Twitter.png";
import { Link } from "react-router-dom";

const FooterAddress = () => {
    const socials = [
        {
            key: "Instagram",
            img: Instagram,
            href: "/",
        },
        {
            key: "Facebook",
            img: Facebook,
            href: "/",
        },
        {
            key: "Twitter",
            img: Twitter,
            href: "/",
        },
        {
            key: "Tiktok",
            img: Tiktok,
            href: "/",
        },
    ];

    return (
        <div className="col-span-3">
            <img src={Logo} alt="Logo" />
            <div className="text-gray-400 my-5 leading-[30px]">
                <p>Address: 380 Quan Hoa, Cau Giay, HaNoi</p>
                <p>Hotline: 1800.808.88</p>
                <p>Email: info@sneakers.vn</p>
            </div>
            <div className="flex items-center gap-5">
                {socials.map((social) => {
                    return (
                        <Link
                            to={social.href}
                            key={social.key}
                            className="bg-white hover:opacity-90 rounded-full flex items-center justify-center w-[40px] h-[40px]"
                        >
                            <img src={social.img} alt={social.key} />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default FooterAddress;
