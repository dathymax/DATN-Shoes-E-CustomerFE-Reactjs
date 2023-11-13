import { useEffect } from "react";
import { Divider, Input } from "antd";
import { CiSearch } from "react-icons/ci";
import ProductList from "../../components/product/list";
import SearchPageFilterPrice from "../../components/data-display/filter/FilterPrice";
import SearchPageFilterBrand from "../../components/data-display/filter/FilterBrand";
import SearchPageFilterSize from "../../components/data-display/filter/FilterSize";
import { useNavigate, useSearchParams } from "react-router-dom";
import { InputChangeEvent } from "../../types/events";

const SearchPage = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const search = searchParams.get("search") || "";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const onChange = (event: InputChangeEvent) => {
        searchParams.set("search", event.target.value);
        navigate(`?${searchParams.toString()}`);
    }

    return (
        <div className="container m-auto py-20">
            <div className="w-[35%] m-auto text-center">
                <h1 className="font-medium text-[35px] mb-5">
                    Find your perfect shoes
                </h1>
                <div
                    className="py-2 flex items-center justify-between"
                    style={{ borderBottom: "1px solid gray" }}
                >
                    <Input
                        autoFocus
                        placeholder="Search here"
                        bordered={false}
                        className="p-0"
                        value={search}
                        onChange={onChange}
                        allowClear
                    />
                    <CiSearch />
                </div>
            </div>
            <div className="h-[80px]"></div>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-3">
                    <SearchPageFilterPrice />
                    <Divider />
                    <SearchPageFilterBrand />
                    <Divider />
                    <SearchPageFilterSize />
                </div>
                <div className="col-span-9">
                    <ProductList />
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
