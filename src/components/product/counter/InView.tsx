import { FC, useEffect, useState } from "react";

interface ProductCounterInViewProps {
    initCount: number | string
}

const ProductCounterInView: FC<ProductCounterInViewProps> = ({ initCount }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(Number(initCount))
    }, [])

    const increase = () => {
        setCount((prev) => prev + 1);
    };

    const deincrease = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
        }
    };

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

export default ProductCounterInView;
