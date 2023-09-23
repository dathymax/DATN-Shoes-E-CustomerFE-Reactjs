import React from "react";
import FilterCheckbox from "./FilterCheckbox";

const SearchPageFilterBrand = () => {
    const itemsBrand = [
        {
            value: "adidas",
            label: "Adidas",
        },
        {
            value: "converse",
            label: "Converse",
        },
        {
            value: "puma",
            label: "Puma",
        },
        {
            value: "reebok",
            label: "Reebok",
        },
        {
            value: "asics",
            label: "Asics",
        },
        {
            value: "nike",
            label: "Nike",
        },
    ];

    return (
        <div>
            <FilterCheckbox title="Size" items={itemsBrand} />
            <div className="h-[30px]"></div>
        </div>
    );
};

export default SearchPageFilterBrand;
