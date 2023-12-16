import { useAppSelector } from "../../../../store/store";

const SizeParamter = () => {
    const item = useAppSelector((state) => state.products.item);

    return (
        <div className="flex items-center gap-4">
            <p>Size:</p>
            <div
                key={item?.sizes}
                className="rounded-md flex items-center justify-center"
                style={{
                    width: 40,
                    height: 32,
                }}
            >
                {item?.sizes}
            </div>
        </div>
    );
};

export default SizeParamter;
