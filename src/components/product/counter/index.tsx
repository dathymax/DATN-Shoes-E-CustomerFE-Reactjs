import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const ProductCounter = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount((prev) => prev + 1);
    };

    const deincrease = () => {
        setCount((prev) => prev - 1);
    };

    useEffect(() => {
        searchParams.set("counter", count.toString());

        navigate(`?${searchParams.toString()}`)
    }, [count])

    return (
        <div
            className="px-3 rounded-lg h-[50px] flex items-center justify-center gap-3"
            style={{ border: "1px solid lightgray" }}
        >
            <span className="select-none cursor-pointer" onClick={deincrease}>
                -
            </span>
            <span className="select-none">{count}</span>
            <span className="select-none cursor-pointer" onClick={increase}>
                +
            </span>
        </div>
    );
};

export default ProductCounter;
