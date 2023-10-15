import React, { FC } from 'react'

interface FlexBetweenProps {
    children: React.ReactNode,
    gap?: number,
    className?: string,
    style?: React.CSSProperties
}

const FlexBetween: FC<FlexBetweenProps> = ({ children, gap, className, style }) => {
    return (
        <div
            className={`flex items-center justify-between ${className}`}
            style={{ gap: `${gap}px`, ...style }}
        >
            {children}
        </div>
    )
}

export default FlexBetween