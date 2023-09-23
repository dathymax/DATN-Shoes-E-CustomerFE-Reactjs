import { Button, Form } from "antd";
import React, { useState } from "react";
import { IUser } from "../../types";
import { createUser } from "../../apis/user";
import Login from "./login";
import Register from "./register";

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
                {type === "login" ? <Login /> : <Register />}

                <Button
                    block
                    type="primary"
                    style={{ height: 50 }}
                    htmlType="submit"
                >
                    {type === "login" ? "Sign in" : "Register"}
                </Button>
            </Form>

            <div className="text-center my-5">
                {type === "login" ? (
                    <>
                        Don't have account yet?{" "}
                        <span
                            className="text-primary underline cursor-pointer"
                            onClick={() => handleSetType("register")}
                        >
                            Register here
                        </span>
                    </>
                ) : (
                    <>
                        Already have account yet?{" "}
                        <span
                            className="text-primary underline cursor-pointer"
                            onClick={() => handleSetType("login")}
                        >
                            Sign-in here
                        </span>
                    </>
                )}
            </div>
        </>
    );
};

export default Authenticate;
