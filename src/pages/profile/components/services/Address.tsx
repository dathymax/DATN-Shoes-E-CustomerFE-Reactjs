import { Button, Col, Form, Input, Row, Select } from 'antd'
import { FC, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { AddressShippingApis } from '../../../../apis/address-shipping'
import { useAppContext } from '../../../../contexts/AppContext'
import { IAddressShipping } from '../../../../types'

interface IAddressServices {
    addressId?: string,
    address?: IAddressShipping,
}

const AddressServices: FC<IAddressServices> = ({ addressId, address }) => {
    const { id } = useParams();
    const [form] = Form.useForm();
    const { openNotiError, openNotiSuccess } = useAppContext();

    useEffect(() => {
        if (address) {
            form.setFieldsValue(address);
        }
    }, [])

    const onFinish = (values: any) => {
        values = {
            ...values,
            userId: id,
        }

        if (!addressId) {
            AddressShippingApis.createAddressShipping(values).then(() => {
                window.location.reload();
                openNotiSuccess("Create address shipping")
            }).catch(() => {
                openNotiError("Create address shipping")
            })
        } else {
            AddressShippingApis.updateAddressShipping(addressId, values).then(() => {
                window.location.reload();
                openNotiSuccess("Update address shipping")
            }).catch(() => {
                openNotiError("Update address shipping")
            })
        }
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
                <Select
                    options={[
                        {
                            label: "Home",
                            value: "home"
                        },
                        {
                            label: "Office",
                            value: "office"
                        },
                    ]}
                    placeholder='Eg. home or office'
                />
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
                        name="province"
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
                {addressId ? "Edit" : "Save"}
            </Button>
        </Form>
    )
}

export default AddressServices