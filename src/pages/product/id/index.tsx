import { useEffect } from "react";
import ProductDetailImage from "../../../components/product/detail/Image";
import ProductDetailParameter from "../../../components/product/detail/parameter";
import Tabs from "../../../components/navigation/tabs";
import ProductDetailReviews from "./components/Reviews";
import ShippingAndReturns from "./components/ShippingAndReturns";
import HomePageBestSelling from "../../home/components/BestSelling";
import { useAppDispatch } from "../../../store/store";
import { ProductApis } from "../../../apis/product";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { setProduct } from "../../../store/features/products";

const ProductDetailPage = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (id) {
            ProductApis.getProductById(id)
                .then((response) => {
                    dispatch(setProduct(response?.data));
                    searchParams.set("quantity", response?.data?.quantity);
                    navigate(`?${searchParams.toString()}`);
                })
                .catch(() => {});
        }
    }, [id]);

    return (
        <div className="container m-auto p-10">
            <div className="grid grid-cols-12 gap-20">
                <ProductDetailImage />
                <ProductDetailParameter />
            </div>
            <div className="h-[50px]"></div>
            <Tabs
                items={[
                    {
                        label: "Customer reviews",
                        key: "customer-reviews",
                        children: <ProductDetailReviews />,
                    },
                    {
                        label: "Shipping & returns",
                        key: "shipping&returns",
                        children: <ShippingAndReturns />,
                    },
                ]}
            />
            <div className="h-[60px]"></div>
            <HomePageBestSelling />
        </div>
    );
};

export default ProductDetailPage;
