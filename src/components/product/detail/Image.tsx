import { useAppSelector } from "../../../store/store";
import { genUploadUrl } from "../../../helpers";

const ProductDetailImage = () => {
    const item = useAppSelector(state => state.products.item);

    return (
        <div className="col-span-6">
            <div className="grid grid-cols-4">
                <div className="col-span-3 h-[600px]">
                    <img
                        src={genUploadUrl(item?.images?.[0]?.fileName)}
                        alt="Detail"
                        className="w-full h-full rounded-lg object-cover"
                    />
                </div>
                <div className="col-span-1 flex flex-col items-center gap-3">
                    {item?.images?.[1]?.fileName && <img
                        src={genUploadUrl(item?.images?.[1]?.fileName)}
                        alt="Detail"
                        className="w-[100px] h-[100px] rounded-lg object-cover"
                    />}
                    {item?.images?.[2]?.fileName && <img
                        src={genUploadUrl(item?.images?.[2]?.fileName)}
                        alt="Detail"
                        className="w-[100px] h-[100px] rounded-lg object-cover"
                    />}
                    {item?.images?.[3]?.fileName && <img
                        src={genUploadUrl(item?.images?.[3]?.fileName)}
                        alt="Detail"
                        className="w-[100px] h-[100px] rounded-lg object-cover"
                    />}
                </div>
            </div>
        </div>
    );
};

export default ProductDetailImage;
