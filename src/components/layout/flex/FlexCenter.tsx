import React, { FC } from 'react'

interface FlexCenterProps {
    children: React.ReactNode,
    gap?: number
}

const FlexCenter: FC<FlexCenterProps> = ({ children, gap }) => {
    return (
        <div className='flex items-center justify-center' style={{ gap: `${gap}px` }}>
            {children}
        </div>
    )
}

export default FlexCenter