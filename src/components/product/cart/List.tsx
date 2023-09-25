import { Button, Divider, Modal } from 'antd'
import React, { FC, useState } from 'react'
import { FiEdit } from "react-icons/fi"
import { AiOutlineDelete } from "react-icons/ai"
import ProductCartOrdered from './Ordered'
import ColorParameter from '../detail/parameter/Color'
import SizeParamter from '../detail/parameter/Size'
import ProductCartRemove from './Remove'

interface IProductCartList {
    products?: any[]
}

const ProductCartList: FC<IProductCartList> = ({ products = [] }) => {
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);

    const handleOpenEdit = () => {
        setOpenEdit(true);
    }

    const handleCloseEdit = () => {
        setOpenEdit(false);
    }

    const handleOpenDelete = () => {
        setOpenDelete(true);
    }

    const handleCloseDelete = () => {
        setOpenDelete(false);
    }

    return (
        <>
            <div className="grid grid-cols-6 gap-3 text-[20px] text-left">
                <div className="col-span-2">
                    Product
                </div>
                <div className='col-span-1'></div>
                <div className='col-span-1'>Price</div>
                <div className='col-span-1'>Quantity</div>
                <div className='col-span-1'>Total</div>
            </div>
            <Divider />
            {products.map(product => {
                return (
                    <div key={product} className="grid grid-cols-6 gap-3 text-[20px] text-left mb-5">
                        <div className="col-span-2">
                            <ProductCartOrdered />
                        </div>
                        <div className='col-span-1 flex items-center justify-center gap-2'>
                            <p className='mx-1 cursor-pointer flex items-center justify-center gap-1' onClick={handleOpenEdit}><FiEdit /> Edit</p>
                            <p className='mx-1 text-red-500 cursor-pointer flex items-center justify-center gap-1' onClick={handleOpenDelete}><AiOutlineDelete /> Delete</p>
                        </div>
                        <div className='col-span-1 flex items-center'>Price</div>
                        <div className='col-span-1 flex items-center'>Quantity</div>
                        <div className='col-span-1 flex items-center'>Total</div>
                    </div>
                )
            })}

            <Modal
                title="Edit cart"
                open={openEdit}
                onCancel={handleCloseEdit}
                centered
                footer={null}
                width={600}
                destroyOnClose
            >
                <ProductCartOrdered />
                <Divider />
                <div className="flex items-center justify-between">
                    <ColorParameter />
                    <SizeParamter />
                </div>
                <Divider />
                <Button className='h-[50px]' type='primary' block>
                    Update cart
                </Button>
            </Modal>

            <Modal
                open={openDelete}
                onCancel={handleCloseDelete}
                centered
                footer={null}
                width={600}
                destroyOnClose
            >
                <ProductCartRemove onCancel={handleCloseDelete} />
            </Modal>
        </>
    )
}

export default ProductCartList