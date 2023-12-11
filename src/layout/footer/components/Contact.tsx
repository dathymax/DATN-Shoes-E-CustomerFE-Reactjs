import { Input } from "antd";

const FooterContact = () => {
    return (
        <div>
            <p className="text-white mb-5">
                Sign up to our newsletter and keep up to date with the latest
                arrivals
            </p>
            <Input
                placeholder="Your email"
                className="py-2 px-4 rounded-3xl bg-gray-900 text-white placeholder:text-gray-300"
            />
        </div>
    );
};

export default FooterContact;
