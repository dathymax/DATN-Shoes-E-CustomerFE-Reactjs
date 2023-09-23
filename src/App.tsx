import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import Layout from "./layout";
import SearchPage from "./pages/search";
import AllProductPage from "./pages/all-product";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/all-products" element={<AllProductPage />} />
                <Route path="/*" element={<HomePage />} />
            </Route>
        </Routes>
    );
}

export default App;
