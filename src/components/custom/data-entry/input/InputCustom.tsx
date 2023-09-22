import { Input, InputProps } from "antd";
import React, { FC } from "react";

interface InputCustomProps extends InputProps {}

const InputCustom: FC<InputCustomProps> = ({ ...rest }) => {
    return (
        <Input
            {...rest}
            style={{
                ...rest.style,
                height: 50,
            }}
        />
    );
};

export default InputCustom;
