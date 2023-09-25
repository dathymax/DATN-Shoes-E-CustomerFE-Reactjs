import { Button, Form } from "antd";
import React, { useState } from "react";
import { IUser } from "../../types";
import { createUser } from "../../apis/user";
import Login from "./login";
import Register from "./register";
import { login } from "../../apis/auth";
import Cookies from "js-cookie";
import { useAppContext } from "../../contexts/AppContext";

const Authenticate = () => {
    const [type, setType] = useState("login");
    const { setLoading, setOpenAuthen, openNotiSuccess, openNotiError } = useAppContext();

    const handleSetType = (type: string) => {
        setType(type);
    };

    const onFinish = (values: IUser) => {
        setLoading(true);

        if (type === "login") {
            login(values)
                .then((response) => {
                    if (response.authentication.sessionToken) {
                        localStorage.setItem("userEmail", response.email);
                        localStorage.setItem("USER-AUTH", response.authentication.sessionToken);
                        Cookies.set("USER-AUTH", response.authentication.sessionToken, {
                            domain: "localhost",
                        });

                        setLoading(false);
                        setOpenAuthen(false);
                        openNotiSuccess("Login", `Hello ${values.email}`);
                    }
                })
                .catch(() => {
                    setLoading(false);
                    openNotiError("Login");
                });
        } else {
            createUser(values)
                .then(() => {
                    setLoading(false);
                    setOpenAuthen(false);
                    openNotiSuccess("Register");
                })
                .catch(() => {
                    setLoading(false);
                    openNotiError("Register");
                });
        }
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
