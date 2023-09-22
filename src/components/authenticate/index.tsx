import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import { IUser } from "../../types";
import InputCustom from "../custom/data-entry/input/InputCustom";
import { createUser } from "../../apis/user";
import axios from "axios";

const Authenticate = () => {
    const [type, setType] = useState("login");

    const handleSetType = (type: string) => {
        setType(type);
    };

    const onFinish = (values: IUser) => {
        createUser(values)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <Form onFinish={onFinish} layout="vertical">
                <Form.Item label={"First name"} name={"firstname"}>
                    <InputCustom placeholder="Fist name" />
                </Form.Item>

                <Form.Item label={"First name"} name={"lastname"}>
                    <InputCustom placeholder="Fist name" />
                </Form.Item>

                <Form.Item label={"First name"} name={"email"}>
                    <InputCustom placeholder="Fist name" />
                </Form.Item>

                <Form.Item label={"First name"} name={"password"}>
                    <InputCustom placeholder="Fist name" />
                </Form.Item>

                <Button
                    block
                    type="primary"
                    style={{ height: 50 }}
                    htmlType="submit"
                >
                    Sign in
                </Button>
            </Form>
        </>
    );
};

export default Authenticate;
