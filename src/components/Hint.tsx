import React, { useState } from 'react';
import Graffiti from "../assets/graffiti.jpg";

export default function Hint() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button
                onClick={() => setIsOpen(true)}
                className='bg-blue-600 text-white font-bold py-2 px-4 m-2 rounded hint-icon hover:'
            >
                Hint found!
			</button>
            { isOpen &&
                <div
                    className={`hint-modal modal fixed w-full h-full top-0 left-0 flex items-center justify-center`}
                >
                    <div className='modal-overlay absolute w-full h-full bg-gray-900 opacity-50'></div>

                    <div className='modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto p-4'>
                        <div className="bg-gray-400">
                            <img src={Graffiti} className="object-cover h-48 w-full ..." />
                        </div>
                        <div className='flex justify-between items-center pb-3'>
                            <p className='text-2xl font-bold'>
                                Secret Graffiti
						</p>
                        </div>

                        <p>ไปถ่ายรูปแนวสตรีทอาร์ทกัน
                        เห็นใครใครเขารีวิวแล้วทำเอาอิจฉา
                        </p>

                        <div className='flex justify-end pt-2'>
                            <button
                                onClick={() => { setIsOpen(false) }}
                                className='modal-close bg-blue-600 px-4 p-3 rounded-lg text-white hover:bg-blue-400'>
                                Close
						        </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );

}