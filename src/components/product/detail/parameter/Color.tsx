import React from "react";
import "./style.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai"

const ColorParameter = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const colorParams = searchParams.get("color");

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

    const handleSetParams = (color: string) => {
        if (color) {
            searchParams.set("color", color);

            navigate(`?${searchParams.toString()}`);
        }
    }

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
                            onClick={() => {
                                if (!color.isDisable) {
                                    handleSetParams(color.value)
                                }
                            }}
                        >
                            {color.isDisable && (
                                <div className="disable-color" />
                            )}
                            {colorParams === color.value && <div className="flex items-center justify-center h-full w-full">
                                <AiOutlineCheck className={`${color.value === "white" ? "text-black" : "text-white"} text-[20px]`} />
                            </div>}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ColorParameter;
