import React, { useState } from 'react';
import Modal from "react-modal";
import Cat from "../assets/cat.jpg";

const customStyles = {
    content: {
        top: '30%',
        left: '40%',
        right: 'auto',
        bottom: 'auto',
    }
};

export default function Hint() {
    var subtitle: any;
    const [isOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }


    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="flex h-screen">
            <div className="m-auto">
                <button onClick={openModal}>Open Modal</button>
                <Modal isOpen={isOpen} style={customStyles} contentLabel="Hint">
                    <div className="bg-gray-400">
                        <img className="object-cover h-48 w-full ..." src={Cat} />
                    </div>
                    <h2>กล้ามาก เก่งมาก ขอบใจ</h2>
                    <button onClick={closeModal}>close</button>
                </Modal>
            </div>
        </div>
    );

}