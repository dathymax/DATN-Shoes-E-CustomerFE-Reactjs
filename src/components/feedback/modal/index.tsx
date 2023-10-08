import { Modal, ModalProps } from "antd";
import React, { FC } from "react";

interface CustomModalProps extends ModalProps {
    children?: React.ReactNode;
}

const CustomModal: FC<CustomModalProps> = ({ children, ...rest }) => {
    return (
        <Modal {...rest} destroyOnClose centered footer={null}>
            {children}
        </Modal>
    );
};

export default CustomModal;
