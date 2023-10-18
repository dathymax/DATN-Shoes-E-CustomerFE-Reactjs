import React, { FC } from 'react'

interface FlexProps {
    children: React.ReactNode,
    gap?: number,
    className?: string,
    style?: React.CSSProperties
}

const Flex: FC<FlexProps> = ({ children, gap, className, style }) => {
    return (
        <div
            className={`flex items-center ${className}`}
            style={{ gap: `${gap}px`, ...style }}
        >
            {children}
        </div>
    )
}

export default Flex