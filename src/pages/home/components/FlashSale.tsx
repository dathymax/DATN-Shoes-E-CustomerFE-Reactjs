import ProductCarosel from "../../../components/product/carosel";
import { Link } from "react-router-dom";
import ProductCard from "../../../components/product/card";
import { useAppSelector } from "../../../store/store";

const HomePageFlashSale = () => {
    const items = useAppSelector(state => state.products.items);

    return (
        <ProductCarosel
            title="Flash Sale"
            extra={
                <Link to={"/"} className="text-[12px] text-primary">
                    View more
                </Link>
            }
            items={items.map((item) => {
                return {
                    key: item._id,
                    content: (
                        <Link to={`/products/${item._id}`} className="block m-3">
                            <ProductCard product={item} />
                        </Link>
                    ),
                };
            })}
        />
    );
};

export default HomePageFlashSale;