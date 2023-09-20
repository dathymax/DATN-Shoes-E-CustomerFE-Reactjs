import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home"
import Layout from "./layout"

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route index path="/" element={<HomePage />} />
            </Route>
        </Routes>
    )
}

export default App
