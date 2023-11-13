import { Button, Modal } from "antd";
import { FC, useState } from "react";
import AddressServices from "../services/Address";
import Remove from "../../../../assets/images/profile/Remove.png";
import { IAddressShipping } from "../../../../types";
import { AddressShippingApis } from "../../../../apis/address-shipping";
import { useAppContext } from "../../../../contexts/AppContext";

interface IAddressContentItem {
    address?: IAddressShipping
}

const AddressContentItem: FC<IAddressContentItem> = ({ address }) => {
    const [open, setOpen] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const { openNotiSuccess, openNotiError } = useAppContext();

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const handleOpenDelete = () => {
        setOpenDelete(true);
    }

    const handleCloseDelete = () => {
        setOpenDelete(false);
    }

    const handleConfirmDelete = () => {
        AddressShippingApis.deleteAddressShippingById(address?._id).then(() => {
            window.location.reload();
            openNotiSuccess("Delete address");
        }).catch(() => {
            openNotiError("Delete address");
        })
    }

    return (
        <>
            <div>
                <p className='text-gray-400 mb-2 font-medium capitalize'>
                    {address?.addressLabel ? address?.addressLabel : ""}
                </p>
                <p className='font-medium'>
                    {address?.district ? address?.district : ""}
                    , {address?.province ? address?.province : ""}
                    , {address?.city ? address?.city : ""}
                    , {address?.country ? address?.country : ""}
                </p>
                <div className="flex items-center justify-end text-right gap-3 mt-2">
                    <p
                        className='font-medium text-primary cursor-pointer'
                        onClick={handleOpen}
                    >
                        Edit
                    </p>
                    <p
                        className='font-medium text-red-500 cursor-pointer'
                        onClick={handleOpenDelete}
                    >
                        Delete
                    </p>
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
                <AddressServices
                    address={address}
                    addressId={address?._id}
                />
            </Modal>

            <Modal
                open={openDelete}
                onCancel={handleCloseDelete}
                destroyOnClose
                footer={null}
                centered
                bodyStyle={{
                    textAlign: "center"
                }}
            >
                <img src={Remove} alt="Remove" />
                <h2>Remove Address</h2>
                <p>Are you sure you want to remove your Address?</p>
                <div className="flex items-center justify-center gap-3 w-full mt-3">
                    <Button
                        block
                        className="bg-red-500 text-white h-[40px]"
                        onClick={handleConfirmDelete}
                    >
                        Remove
                    </Button>
                    <Button
                        block
                        className="h-[40px]"
                        onClick={handleCloseDelete}
                    >
                        Cancel
                    </Button>
                </div>
            </Modal>
        </>
    )
}

export default AddressContentItem;