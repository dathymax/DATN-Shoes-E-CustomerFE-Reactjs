import { Button, Col, Form, Input, Row } from 'antd';
import React, { FC } from 'react'

interface IProfileServices {
    id?: string
}

const ProfileServices: FC<IProfileServices> = ({ id }) => {
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
            <Row gutter={12}>
                <Col span={12}>
                    <Form.Item
                        label={"First name"}
                        name="firstname"
                    >
                        <Input placeholder='Your first name' />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        label={"Last name"}
                        name="lastname"
                    >
                        <Input placeholder='Your last name' />
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item
                label={"Phone number "}
                name="phoneNumber"
            >
                <Input placeholder='Eg. 0987654321' />
            </Form.Item>

            <Form.Item
                label={"Email"}
                name="email"
            >
                <Input placeholder='Your email' />
            </Form.Item>

            <Button htmlType='submit' type='primary' block className='h-[40px]'>
                {id ? "Edit" : "Save"}
            </Button>
        </Form>
    )
}

export default ProfileServices