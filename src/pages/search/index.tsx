import React, { useEffect } from "react";
import { Input } from "antd";
import { CiSearch } from "react-icons/ci";
import ProductList from "../../components/product/list";
import SearchPageFilterPrice from "../../components/data-display/filter/FilterPrice";
import SearchPageFilterBrand from "../../components/data-display/filter/FilterBrand";
import SearchPageFilterSize from "../../components/data-display/filter/FilterSize";

const SearchPage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        placeholder="Search here"
                        bordered={false}
                        className="p-0"
                    />
                    <CiSearch />
                </div>
            </div>
            <div className="h-[80px]"></div>
            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-3">
                    <SearchPageFilterPrice />
                    <SearchPageFilterBrand />
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
