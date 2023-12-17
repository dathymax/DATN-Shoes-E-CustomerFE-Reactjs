import { Button, Rate } from "antd";
import { useState } from "react";
import ServiceForm from "./ServiceForm";
import CustomModal from "../../feedback/modal";
import { useAppSelector } from "../../../store/store";
import { IReview } from "../../../types";

const ReviewService = () => {
    const [open, setOpen] = useState(false);
    const item = useAppSelector((state) => state.products.item);
    const items = useAppSelector((state) => state.review.items);
    const totalRate = items?.reduce(
        (prev: number, curr: IReview) => prev + Number(curr.rate),
        0
    );
    const mediumRate = totalRate / items?.length;

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="h-[400px] bg-primary rounded-lg px-3 py-8 flex items-center flex-col justify-between text-white">
            <div>
                <h3 className="mb-3 text-[25px] text-center">{item.name}</h3>
                <p className="text-[40px] font-medium text-center mb-4">
                    {mediumRate}
                </p>
                <div className="text-center mb-4">
                    <Rate value={mediumRate} disabled />
                </div>
                <p className="text-center">
                    Overall rating based on {items?.length} reviews
                </p>
                <div className="h-[50px]"></div>
                <div className="h-[50px]"></div>
                <Button
                    size="large"
                    block
                    className="bg-white text-primary"
                    onClick={handleOpen}
                >
                    Write a review
                </Button>
            </div>

            <CustomModal
                open={open}
                onCancel={handleClose}
                title={"Write a Review"}
                destroyOnClose
                footer={null}
                centered
            >
                <ServiceForm />
            </CustomModal>
        </div>
    );
};

export default ReviewService;
