import { Button, Divider, Modal } from 'antd'
import React, { useState } from 'react'
import AddressContentItem from './items/Address'
import AddressServices from './services/Address';

const AddressContent = () => {
    const [open, setOpen] = useState(false);

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
            <AddressContentItem id={"1"} />

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