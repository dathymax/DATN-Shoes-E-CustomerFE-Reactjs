import React from "react";
import "./style.css";

const ColorParameter = () => {
    const colors = [
        {
            value: "red",
            isDisable: false,
        },
        {
            value: "blue",
            isDisable: false,
        },
        {
            value: "green",
            isDisable: true,
        },
        {
            value: "yellow",
            isDisable: true,
        },
        {
            value: "white",
            isDisable: false,
        },
    ];

    return (
        <div>
            <p className="mb-2">Color</p>
            <div className="flex items-center gap-3">
                {colors.map((color) => {
                    return (
                        <div
                            key={color.value}
                            className="rounded-md"
                            style={{
                                background: color.value,
                                width: 32,
                                height: 32,
                                border: "1px solid lightgray",
                                cursor: color.isDisable
                                    ? "not-allowed"
                                    : "pointer",
                            }}
                        >
                            {color.isDisable && (
                                <div className="disable-color" />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ColorParameter;
