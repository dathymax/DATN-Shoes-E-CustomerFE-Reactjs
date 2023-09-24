import { Checkbox } from "antd";
import React, { FC } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

interface IFilterCheckbox {
    value: string;
    label: string | React.ReactNode;
}

interface FilterCheckboxProps {
    title: string;
    items: IFilterCheckbox[];
}

const FilterCheckbox: FC<FilterCheckboxProps> = ({ title, items }) => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const onChangeParams = (value: string) => {
        if (value) {
            searchParams.set(title.toLowerCase(), value);

            navigate(`?${searchParams.toString()}`);
        } else {
            searchParams.delete(title.toLowerCase());
        }
    };

    return (
        <ul>
            <h2 className="mb-3">{title}</h2>
            {items.map((item) => {
                return (
                    <li key={item.value} className="my-2">
                        <Checkbox
                            key={item.value}
                            onChange={(e) => onChangeParams(e.target.value)}
                        >
                            {item.label}
                        </Checkbox>
                    </li>
                );
            })}
        </ul>
    );
};

export default FilterCheckbox;
