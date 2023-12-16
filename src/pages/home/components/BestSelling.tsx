import ProductCarosel from "../../../components/product/carosel";
import { Link } from "react-router-dom";
import ProductCard from "../../../components/product/card";
import { useAppSelector } from "../../../store/store";

const HomePageBestSelling = () => {
    const items = useAppSelector((state) => state.products.items);

    return (
        // <ProductCarosel
        //     title="Best selling"
        //     extra={
        //         <Link to={"/"} className="text-[12px] text-primary">
        //             View more
        //         </Link>
        //     }
        //     items={items.map((item) => {
        //         return {
        //             key: item._id,
        //             content: (
        //                 <Link
        //                     to={`/products/${item._id}`}
        //                     className="block m-3"
        //                 >
        //                     <ProductCard product={item} />
        //                 </Link>
        //             ),
        //         };
        //     })}
        // />
        <>
            <h2 className="text-xl font-medium text-center mb-4">
                Best selling
            </h2>
            <div className="grid grid-cols-4 gap-3">
                {items.slice(0, 3).map((item) => {
                    return (
                        <Link
                            key={item._id}
                            to={`/products/${item._id}`}
                            className="col-span-1 block m-3"
                        >
                            <ProductCard product={item} />
                        </Link>
                    );
                })}
            </div>
        </>
    );
};

export default HomePageBestSelling;
