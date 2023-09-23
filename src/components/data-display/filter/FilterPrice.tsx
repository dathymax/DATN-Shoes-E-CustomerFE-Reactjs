import React from "react";
import FilterCheckbox from "../../../components/data-display/filter/FilterCheckbox";

const SearchPageFilterPrice = () => {
    const itemsPrice = [
        {
            value: "below-500k",
            label: "Below 500,000 VND",
        },
        {
            value: "between-500k-and-1m",
            label: "500,000 - 1,000,000 VND",
        },
        {
            value: "between-1m-and-1m5",
            label: "1,000,000 - 1,500,000 VND",
        },
        {
            value: "between-2m-and-5m",
            label: "2,000,000 - 5,000,000 VND",
        },
        {
            value: "above-5m",
            label: "Above 5,000,000 VND",
        },
    ];

    return (
        <div>
            <FilterCheckbox title="Price" items={itemsPrice} />
            <div className="h-[30px]"></div>
        </div>
    );
};

export default SearchPageFilterPrice;
