import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import Layout from "./layout";
import SearchPage from "./pages/search";
import AllProductPage from "./pages/product";
import MyShoppingCart from "./pages/cart";
import ProductDetailPage from "./pages/product/id";
import CheckoutPage from "./pages/checkout";

function App() {
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
                <Route path="/*" element={<HomePage />} />
            </Route>
        </Routes>
    );
}

export default App;
