import { useMemo } from "react";
import ProductCard from "../card";
import { Link, useSearchParams } from "react-router-dom";
import { useAppSelector } from "../../../store/store";

const ProductList = () => {
    const [searchParams] = useSearchParams();
    const search = searchParams.get("search") || "";
    const items = useAppSelector((state) => state.products.items);

    const itemFiltered = useMemo(() => {
        return items.filter(
            (item) =>
                item?.name
                    ?.toString()
                    ?.toLowerCase()
                    ?.includes(search?.toLowerCase()) &&
                item?.status === "active"
        );
    }, [search]);

    return (
        <div className="grid grid-cols-12 gap-5">
            {itemFiltered?.map((item) => {
                return (
                    <Link
                        to={`/products/${item._id}`}
                        key={item._id}
                        className="col-span-3 text-black"
                    >
                        <ProductCard product={item} />
                    </Link>
                );
            })}
        </div>
    );
};

export default ProductList;
