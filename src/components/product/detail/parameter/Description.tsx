import React, { FC } from "react";

interface DescriptionParameterProps {
    description?: string
}

const DescriptionParameter: FC<DescriptionParameterProps> = ({ description }) => {
    return (
        <div>
            <h3 className="mb-3">Description</h3>
            <p>
                {description}
            </p>
        </div>
    );
};

export default DescriptionParameter;
