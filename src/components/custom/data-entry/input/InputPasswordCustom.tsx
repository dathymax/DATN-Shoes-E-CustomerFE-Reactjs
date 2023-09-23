import { Input, InputProps } from "antd";
import React, { FC } from "react";

interface InputPasswordCustomProps extends InputProps {}

const InputPasswordCustom: FC<InputPasswordCustomProps> = ({ ...rest }) => {
    return (
        <Input.Password
            {...rest}
            style={{
                ...rest.style,
                height: 50,
            }}
        />
    );
};

export default InputPasswordCustom;
