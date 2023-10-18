import React, { FC } from 'react'

interface FlexCenterProps {
    children: React.ReactNode,
    gap?: number,
    className?: string
}

const FlexCenter: FC<FlexCenterProps> = ({ children, gap, className }) => {
    return (
        <div className={`flex items-center justify-center ${className}`} style={{ gap: `${gap}px` }}>
            {children}
        </div>
    )
}

export default FlexCenter