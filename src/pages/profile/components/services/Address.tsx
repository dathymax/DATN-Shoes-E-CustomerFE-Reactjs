import { Button, Col, Form, Input, Row } from 'antd'
import React, { FC } from 'react'

interface IAddressServices {
    id?: string
}

const AddressServices: FC<IAddressServices> = ({ id }) => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log(values);
    }

    return (
        <Form
            form={form}
            layout='vertical'
            onFinish={onFinish}
        >
            <Form.Item
                label={<p>Address label <span className='text-gray-500'>(Optional)</span></p>}
                name="addressLabel"
            >
                <Input placeholder='Eg. home or office' />
            </Form.Item>

            <Form.Item
                label={"Country"}
                name="country"
            >
                <Input placeholder='Add your country' />
            </Form.Item>

            <Form.Item
                label={"Address"}
                name="address"
            >
                <Input placeholder='Your address' />
            </Form.Item>

            <Row gutter={12}>
                <Col span={12}>
                    <Form.Item
                        label={"Province"}
                        name="provice"
                    >
                        <Input placeholder='Your provice' />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        label={"City"}
                        name="city"
                    >
                        <Input placeholder='Your city' />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={12}>
                <Col span={12}>
                    <Form.Item
                        label={"District"}
                        name="district"
                    >
                        <Input placeholder='Your district' />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        label={"Postal code"}
                        name="postalCode"
                    >
                        <Input placeholder='Your postal code' />
                    </Form.Item>
                </Col>
            </Row>

            <Button htmlType='submit' type='primary' block className='h-[40px]'>
                {id ? "Edit" : "Save"}
            </Button>
        </Form>
    )
}

export default AddressServices