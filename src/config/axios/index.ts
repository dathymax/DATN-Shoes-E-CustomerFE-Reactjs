import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("USER-AUTH");

const Axios_instance = axios.create({
    baseURL: "http://localhost:8000/api/v1",
    headers: {
        "Content-Type": "application/xml",
    },
});

Axios_instance.interceptors.request.use((config) => {
    config.headers["Cookie"] = token;
    return config;
});

export default Axios_instance;
