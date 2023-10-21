import { Button, Form } from "antd";
import React, { useState } from "react";
import { IUser } from "../../types";
import Login from "./login";
import Register from "./register";
import { login } from "../../apis/auth";
import { useAppContext } from "../../contexts/AppContext";
import { UserApis } from "../../apis/user";
import { useAppDispatch } from "../../store/store";
import { setUserInfo } from "../../store/features/auth";
import jwtDecode from "jwt-decode";

const Authenticate = () => {
    const dispatch = useAppDispatch();
    const [type, setType] = useState("login");
    const { setLoading, setOpenAuthen, openNotiSuccess, openNotiError } =
        useAppContext();

    const handleSetType = (type: string) => {
        setType(type);
    };

    const onFinish = (values: IUser) => {
        setLoading(true);

        if (type === "login") {
            login(values)
                .then((response) => {
                    localStorage.setItem("accessToken", response);
                    setLoading(false);
                    setOpenAuthen(false);
                    window.location.reload();
                    openNotiSuccess("Login");
                    dispatch(
                        setUserInfo({
                            user: jwtDecode(response),
                            token: response,
                        })
                    );
                })
                .catch((error) => {
                    const { response } = error;
                    setLoading(false);
                    openNotiError("Login", response?.data?.message);
                });
        } else {
            UserApis.createUser(values)
                .then(() => {
                    setLoading(false);
                    setOpenAuthen(false);
                    openNotiSuccess("Register");
                })
                .catch((error) => {
                    const { response } = error;
                    setLoading(false);
                    openNotiError("Register", response?.data?.message);
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
