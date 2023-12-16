import "./style.css";
import { useAppSelector } from "../../../../store/store";

const ColorParameter = () => {
    const item = useAppSelector((state) => state.products.item);

    return (
        <div className="flex items-center gap-4">
            <p className="mb-2">Color:</p>
            <div
                key={item?.colors}
                className="rounded-md"
                style={{
                    background: item?.colors,
                    width: 32,
                    height: 32,
                    border: "1px solid lightgray",
                }}
            ></div>
        </div>
    );
};

export default ColorParameter;
