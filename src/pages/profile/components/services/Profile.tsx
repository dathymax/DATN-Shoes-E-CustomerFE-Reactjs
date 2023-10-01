import { Button, Col, Form, Input, Row } from 'antd';
import React, { FC, useEffect } from 'react'
import { UserApis } from '../../../../apis/user';
import { useAppContext } from '../../../../contexts/AppContext';
import { IUser } from '../../../../types';

interface IProfileServices {
    id?: string,
    handleClose?: () => void,
    user?: IUser
}

const ProfileServices: FC<IProfileServices> = ({ id, handleClose, user }) => {
    const [form] = Form.useForm();
    const { openNotiError, openNotiSuccess } = useAppContext();

    useEffect(() => {
        form.setFieldsValue(user);
    }, [])

    const onFinish = (values: any) => {
        UserApis.updateUser(id, values).then(() => {
            openNotiSuccess("Update user");
            if (handleClose) {
                handleClose()
            }
            window.location.reload()
        }).catch(() => {
            openNotiError("Update user");
        })
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

            <Button htmlType='submit' type='primary' block className='h-[40px]'>
                {id ? "Edit" : "Save"}
            </Button>
        </Form>
    )
}

export default ProfileServices