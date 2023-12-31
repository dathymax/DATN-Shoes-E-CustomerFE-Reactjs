import { useEffect } from "react";
import SearchPageFilterPrice from "../../components/data-display/filter/FilterPrice";
import SearchPageFilterBrand from "../../components/data-display/filter/FilterBrand";
import SearchPageFilterSize from "../../components/data-display/filter/FilterSize";
import ProductList from "../../components/product/list";

const AllProductPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container m-auto py-20">
            <h1 className="font-medium text-[35px] mb-5 text-center">
                All products
            </h1>
            <div className="h-[80px]"></div>
            <div className="grid grid-cols-12 gap-5">
                {/* <div className="col-span-3">
                    <SearchPageFilterPrice />
                    <SearchPageFilterBrand />
                    <SearchPageFilterSize />
                </div> */}
                <div className="col-span-12">
                    <ProductList />
                </div>
            </div>
        </div>
    );
};

export default AllProductPage;
