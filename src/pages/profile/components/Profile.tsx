import { Button, Divider, Modal } from 'antd'
import React, { FC, useState } from 'react'
import ProfileServices from './services/Profile';
import { IUser } from '../../../types';

interface ProfileContentProps {
    user?: IUser
}

const ProfileContent: FC<ProfileContentProps> = ({ user }) => {
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
                <h2>Profile detail</h2>
                <Button type='primary' onClick={handleOpen}>
                    Edit
                </Button>
            </div>
            <Divider />
            <div className="grid grid-cols-6 text-gray-400 font-bold mb-2">
                <div className="col-span-2">
                    Name
                </div>
                <div className="col-span-2">
                    Email address
                </div>
                <div className="col-span-2">
                    Phone number
                </div>
            </div>
            <div className="grid grid-cols-6 text-black">
                <div className="col-span-2">
                    {`${user?.firstname} ${user?.lastname}`}
                </div>
                <div className="col-span-2">
                    {user?.email}
                </div>
                <div className="col-span-2">
                    {user?.phoneNumber}
                </div>
            </div>

            <Modal
                open={open}
                onCancel={handleClose}
                title="Address"
                destroyOnClose
                footer={null}
                centered
            >
                <ProfileServices user={user} id={user?._id} handleClose={handleClose} />
            </Modal>
        </div>
    )
}

export default ProfileContent