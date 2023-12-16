import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { updateProductInCart } from "../../../store/features/cart";

const ProductCounterInView = () => {
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const quantity = searchParams.get("quantity") || 0;

    const increase = () => {
        if (count < Number(quantity)) {
            setCount((prev) => prev + 1);
        }
    };

    const deincrease = () => {
        if (count > 1) {
            setCount((prev) => prev - 1);
        }
    };

    useEffect(() => {
        dispatch(updateProductInCart({ id, quantity: count }));
        searchParams.set("orderQuantity", count.toString());
        navigate(`?${searchParams.toString()}`);
    }, [count]);

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
