import { Button, Form, Input, Rate } from "antd";
import { IReview } from "../../../types";
import { ReviewApis } from "../../../apis/review";
import { useAppContext } from "../../../contexts/AppContext";
import { useParams } from "react-router-dom";

const ServiceForm = () => {
    const { id } = useParams();
    const [form] = Form.useForm();
    const { openNotiError, openNotiSuccess } = useAppContext();

    const onFinish = (values: IReview) => {
        values = {
            ...values,
            productId: id,
        };

        ReviewApis.createReview(values)
            .then(() => {
                openNotiSuccess("Create review");
                window.location.reload();
            })
            .catch((error) => {
                const { response } = error;
                openNotiError("Create review", response?.data?.message);
            });
    };

    return (
        <Form form={form} layout="vertical" onFinish={onFinish}>
            <Form.Item
                name={"authorName"}
                label="Name"
                rules={[
                    {
                        required: true,
                        message: "Please type your name",
                    },
                ]}
            >
                <Input size="large" placeholder="Your name" />
            </Form.Item>

            <Form.Item
                name={"authorEmail"}
                label="Email"
                rules={[
                    {
                        required: true,
                        type: "email",
                        message: "Please type your email",
                    },
                ]}
            >
                <Input
                    type="email"
                    size="large"
                    placeholder="Your email address"
                />
            </Form.Item>

            <Form.Item
                name="rate"
                label="Rating"
                rules={[
                    {
                        required: true,
                        message: "Please type rate the product",
                    },
                ]}
            >
                <Rate allowClear />
            </Form.Item>

            <Form.Item
                name={"title"}
                label="Review Title (max 10 word)"
                rules={[
                    {
                        required: true,
                        message: "Please type your title",
                    },
                ]}
            >
                <Input size="large" placeholder="Your review a title" />
            </Form.Item>

            <Form.Item
                name={"description"}
                label="Body Of Review (max 150 word)"
                rules={[
                    {
                        required: true,
                        message: "Please type your review",
                    },
                ]}
            >
                <Input.TextArea
                    size="large"
                    placeholder="write your review...."
                    autoSize={{
                        maxRows: 5,
                        minRows: 5,
                    }}
                />
            </Form.Item>

            <Button type="primary" htmlType="submit" block size="large">
                Submit review
            </Button>
        </Form>
    );
};

export default ServiceForm;
