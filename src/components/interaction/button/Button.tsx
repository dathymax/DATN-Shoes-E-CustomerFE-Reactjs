import React, { FC } from 'react'

interface ButtonProps {
    type?: "primary" | "default",
    children?: React.ReactNode,
    onClick?: () => void,
    style?: React.CSSProperties
}

const Button: FC<ButtonProps> = ({ type = "default", children, onClick, style }) => {
    return (
        <button
            onClick={onClick}
            className={`${type === "default" ? "bg-none border border-[var(--third-color)] text-[var(--third-color)]" : "bg-[var(--third-color)] text-white"} rounded-lg py-[13px] px-auto active:opacity-80 transition-all`}
            style={style}
        >
            {children}
        </button>
    )
}

export default Button