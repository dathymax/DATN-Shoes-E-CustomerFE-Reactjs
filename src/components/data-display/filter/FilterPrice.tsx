import FilterCheckbox from "../../../components/data-display/filter/FilterCheckbox";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchPageFilterPrice = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const price = searchParams.get("price") || 0;
    const itemsPrice = [
        {
            value: "below-500",
            label: "Below $500",
        },
        {
            value: "between-500-and-1k",
            label: "$500 - $1,000",
        },
        {
            value: "between-1k-and-1k5",
            label: "$1,000 - $1,500",
        },
        {
            value: "between-2k-and-5k",
            label: "$2,000 - $5,000",
        },
        {
            value: "above-5k",
            label: "Above $5,000",
        },
    ];

    return (
        <div>
            <FilterCheckbox title="Price" items={itemsPrice} />
        </div>
    );
};

export default SearchPageFilterPrice;
