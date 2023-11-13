import Logo from "../../../assets/images/Logo-login.png";
import { Checkbox, Form } from "antd";
import InputCustom from "../../custom/data-entry/input/InputCustom";
import InputPasswordCustom from "../../custom/data-entry/input/InputPasswordCustom";

const Login = () => {
    return (
        <>
            <div className="text-center">
                <img src={Logo} alt="Logo" className="w-[100px] h-[100px]" />
            </div>
            <div className="my-5">
                <h2 className="font-medium">Welcome back</h2>
                <p className="text-gray-500">
                    Please enter your detail and find your look
                </p>
            </div>
            <Form.Item
                label={"Email"}
                name={"email"}
                rules={[
                    {
                        required: true,
                        message: "Please type email!",
                    },
                    {
                        type: "email",
                    },
                ]}
            >
                <InputCustom placeholder="Email adress" type="email" />
            </Form.Item>

            <Form.Item
                label={"Password"}
                name={"password"}
                rules={[
                    {
                        required: true,
                        message: "Please type password",
                    },
                ]}
            >
                <InputPasswordCustom placeholder="Password" />
            </Form.Item>

            <div className="flex items-center justify-between mb-4">
                <Form.Item style={{ margin: 0 }}>
                    <Checkbox>Remember</Checkbox>
                </Form.Item>

                <p className="cursor-pointer">Forgot password</p>
            </div>
        </>
    );
};

export default Login;
