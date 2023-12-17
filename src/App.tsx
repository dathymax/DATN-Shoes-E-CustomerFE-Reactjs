import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import Layout from "./layout";
import SearchPage from "./pages/search";
import AllProductPage from "./pages/product";
import MyShoppingCart from "./pages/cart";
import ProductDetailPage from "./pages/product/id";
import WishlistPage from "./pages/wishlist";
import ProfilePage from "./pages/profile";
import { useAppDispatch } from "./store/store";
import { useEffect } from "react";
import { ProductApis } from "./apis/product";
import { setAllProduct } from "./store/features/products";
import CheckoutPage from "./pages/checkout";
import OrderSuccessPage from "./pages/order/Success";
import { IProduct } from "./types";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        ProductApis.getAllProducts()
            .then((response) => {
                dispatch(
                    setAllProduct(
                        response?.data?.filter(
                            (item: IProduct) => item.status !== "inactive"
                        )
                    )
                );
            })
            .catch(() => {});
    }, []);

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/products">
                    <Route index element={<AllProductPage />} />
                    <Route path=":id" element={<ProductDetailPage />} />
                </Route>
                <Route path="/my-cart" element={<MyShoppingCart />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/order-success" element={<OrderSuccessPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/profile/:id" element={<ProfilePage />} />
                <Route path="/*" element={<HomePage />} />
            </Route>
        </Routes>
    );
}

export default App;
