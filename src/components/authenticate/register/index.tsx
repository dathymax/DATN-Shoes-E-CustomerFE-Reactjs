import { Form } from "antd";
import React from "react";
import InputCustom from "../../custom/data-entry/input/InputCustom";
import InputPasswordCustom from "../../custom/data-entry/input/InputPasswordCustom";

const Register = () => {
    return (
        <>
            <div className="mb-5">
                <h2 className="font-medium">Create an Account</h2>
                <p className="text-gray-500">
                    Register for faster checkout, track your order's status, and
                    more
                </p>
            </div>
            <Form.Item label={"First name"} name={"firstname"}>
                <InputCustom placeholder="Fist name" />
            </Form.Item>

            <Form.Item label={"Last name"} name={"lastname"}>
                <InputCustom placeholder="Last name" />
            </Form.Item>

            <Form.Item
                label={"Email"}
                name={"email"}
                rules={[
                    {
                        required: true,
                        message: "Please type email",
                    },
                    {
                        type: "email",
                    },
                ]}
            >
                <InputCustom type="email" placeholder="Email address" />
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
        </>
    );
};

export default Register;
