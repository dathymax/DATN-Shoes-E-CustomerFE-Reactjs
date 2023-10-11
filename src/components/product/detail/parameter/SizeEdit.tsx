import React, { FC } from "react";

interface SizeEditParamterProps {
    initSize: string | number
}

const SizeEditParamter: FC<SizeEditParamterProps> = ({ initSize }) => {
    const sizes = [
        {
            value: 39,
            isDisable: false,
        },
        {
            value: 40,
            isDisable: false,
        },
        {
            value: 41,
            isDisable: false,
        },
        {
            value: 42,
            isDisable: true,
        },
        {
            value: 43,
            isDisable: true,
        },
    ];

    return (
        <div>
            <div className="flex items-center mb-2 gap-2">
                <p>Size</p>
                <p
                    className="px-2 text-primary"
                    style={{ borderLeft: "1px solid lightgray" }}
                >
                    Size guide
                </p>
            </div>
            <div className="flex items-center gap-3">
                {sizes.map((size) => {
                    return (
                        <div
                            key={size.value}
                            className="rounded-md flex items-center justify-center"
                            style={{
                                background: size.isDisable
                                    ? "lightgray"
                                    : "none",
                                width: 40,
                                height: 32,
                                border: initSize === size.value.toString()
                                    ? "2px solid green"
                                    : "2px solid lightgray",
                                cursor: size.isDisable
                                    ? "not-allowed"
                                    : "pointer",
                                color: size.isDisable ? "gray" : "black",
                            }}
                        >
                            {size.value}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SizeEditParamter;
