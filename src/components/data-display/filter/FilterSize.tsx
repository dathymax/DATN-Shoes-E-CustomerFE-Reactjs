import FilterCheckbox from "../../../components/data-display/filter/FilterCheckbox";

const SearchPageFilterSize = () => {
    const itemsSize = [
        {
            value: "39",
            label: "39",
        },
        {
            value: "40",
            label: "40",
        },
        {
            value: "41",
            label: "41",
        },
        {
            value: "42",
            label: "42",
        },
        {
            value: "43",
            label: "43",
        },
    ];

    return (
        <div>
            <FilterCheckbox title="Size" items={itemsSize} />
        </div>
    );
};

export default SearchPageFilterSize;
