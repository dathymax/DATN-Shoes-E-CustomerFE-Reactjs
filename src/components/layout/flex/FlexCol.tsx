import React, { FC } from 'react'

interface FlexColProps {
    children: React.ReactNode,
    gap?: number,
    centered?: boolean,
    className?: string
}

const FlexCol: FC<FlexColProps> = ({ children, gap, centered, className }) => {
    return (
        <div
            className={`flex flex-col ${className}`}
            style={{ gap: `${gap}px`, alignItems: centered ? "center" : "normal" }}
        >
            {children}
        </div>
    )
}

export default FlexCol