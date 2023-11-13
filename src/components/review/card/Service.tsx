import { Button } from "antd";
import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import ServiceForm from "./ServiceForm";
import CustomModal from "../../feedback/modal";

const ReviewService = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="h-[400px] bg-primary rounded-lg px-3 py-8 flex items-center flex-col justify-between text-white">
            <div>
                <h3 className="mb-3 text-[25px]">Women Sweet Sweater</h3>
                <p className="text-[40px] font-medium text-center mb-4">4.7</p>
                <div className="text-center mb-4">
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-500" />
                    <AiFillStar className="text-yellow-500" />
                    <AiOutlineStar />
                </div>
                <p className="text-center">
                    Overall rating based on 198 reviews
                </p>
                <div className="h-[50px]"></div>
                <p className="text-center">
                    <span className="font-bold">398</span> products have been
                    sold
                </p>
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
