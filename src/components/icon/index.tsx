import React, { FC } from "react";

interface IIcon {
    src: string;
}

const Icon: FC<IIcon> = ({ src }) => {
    return <img src={src} alt="Icon" />;
};

export default Icon;
