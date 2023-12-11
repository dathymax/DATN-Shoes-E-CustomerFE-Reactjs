import { Button, Divider, Modal } from 'antd'
import { useEffect, useState } from 'react'
import AddressContentItem from './items/Address'
import AddressServices from './services/Address';
import { useParams } from 'react-router-dom';
import { AddressShippingApis } from '../../../apis/address-shipping';
import { IAddressShipping } from '../../../types';

const AddressContent = () => {
    const { id } = useParams();
    const [open, setOpen] = useState(false);
    const [addresses, setAddresses] = useState<IAddressShipping[]>([]);

    useEffect(() => {
        if (id) {
            AddressShippingApis.getAddressShippingByUserId(id).then(response => {
                setAddresses(response?.data);
            })
        }
    }, [])

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <h2>Address Details</h2>
                <Button type='primary' onClick={handleOpen}>
                    Add address
                </Button>
            </div>
            <Divider />
            {addresses.map(address => {
                return (
                    <AddressContentItem key={address._id} address={address} />
                )
            })}

            <Modal
                open={open}
                onCancel={handleClose}
                title="Address"
                destroyOnClose
                footer={null}
                centered
            >
                <AddressServices />
            </Modal>
        </div>
    )
}

export default AddressContent