import Modal from "@mui/material/Modal";
import React, { useState } from "react";

const ModalProvider = ({ children, open, handleClose, handleOpen }) => {
    return (
        <>
            <button
                className="me-auto w-10 h-10 text-large flex justify-center items-center"
                onClick={handleClose}
            >
                &times;
            </button>
            <Modal open={open} onClose={handleClose}>
                {children}
            </Modal>
        </>
    );
};

export default ModalProvider;
