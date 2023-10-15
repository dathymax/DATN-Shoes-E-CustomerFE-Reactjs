import React, { FC } from 'react'

interface FlexColProps {
    children: React.ReactNode,
    gap?: number,
    centered?: boolean
}

const FlexCol: FC<FlexColProps> = ({ children, gap, centered }) => {
    return (
        <div
            className='flex flex-col'
            style={{ gap: `${gap}px`, alignItems: centered ? "center" : "normal" }}
        >
            {children}
        </div>
    )
}

export default FlexCol