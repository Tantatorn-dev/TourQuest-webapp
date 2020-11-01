import React, { useState } from 'react';
import { RiShoppingBagLine } from 'react-icons/ri';
import Modal from 'react-modal';

import useFirebase from '../hooks/useFirebase';

function RedeemItem() {
	return (
		<div className='flex flex-row m-1 p-1 justify-around items-center bg-white rounded-lg shadow-lg'>
			<div className='ml-2'>
				<RiShoppingBagLine color='orange' size={32} />
			</div>
			<div className='flex flex-col flex-wrap w-2/5'>
				<div className='text-lg'>ส่วนลด Shopee</div>
				<div>50 💎</div>
			</div>
			<button className='bg-orange-500 p-1 rounded text-center text-white'>
				Redeem
			</button>
		</div>
	);
}
function RedeemItemS() {
	const firebase = useFirebase();
	const [isOpen, setIsOpen] = useState(false);

	const handleRedeem = async () => {
		firebase.firestore().collection('badges').add({
			user: 'SPnx58ZW8iu0A5rftlqA',
			image:
				'https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-9/118769654_117689810056921_6614798674417583108_n.png?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=U8VfavJN4L0AX-5a-TR&_nc_ht=scontent.fbkk22-3.fna&oh=67c9a5881dedb0c2f29e2a3412d7de97&oe=5FC55987',
    });
    setIsOpen(false);
	};

	return (
		<>
			<div className='flex flex-row m-1 p-1 justify-around items-center bg-white rounded-lg shadow-lg'>
				<div className='ml-2'>
					<RiShoppingBagLine color='orange' size={32} />
				</div>
				<div className='flex flex-col flex-wrap w-2/5'>
					<div className='text-lg'>แลก Badge DevDisrupt</div>
					<div>35 💎</div>
				</div>
				<button
					onClick={() => setIsOpen(true)}
					className='bg-orange-500 p-1 rounded text-center text-white'
				>
					Redeem
				</button>
			</div>

      {isOpen && <div
				className={`modal fixed w-full h-full top-0 left-0 flex items-center justify-center`}
			>
				<div className='modal-overlay absolute w-full h-full bg-gray-900 opacity-50'></div>

				<div className='modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto p-4'>
					<div className='flex justify-between items-center pb-3'>
						<p className='text-2xl font-bold'>
							Confirm redeem?
						</p>
					</div>

					<p>Confirm redeem "แลก Badge DevDisrupt"?</p>

					<div className='flex justify-end pt-2'>
						<button
							onClick={() => setIsOpen(false)}
							className='px-4 bg-transparent p-3 rounded-lg text-orange-500 hover:bg-gray-100 hover:text-orange-400 mr-2'
						>
							Cancel
						</button>
            <button 
              onClick={() => handleRedeem()}
              className='modal-close px-4 bg-orange-500 p-3 rounded-lg text-white hover:bg-orange-400'>
							Redeem
						</button>
					</div>
				</div>
			</div>}
		</>
	);
}

// MOCK DATA
function Redeem() {
	return (
		<div>
			<div className='flex justify-between'>
				<div className='flex flex-row items-center text-2xl'>
					🎁 Redeem
				</div>
				<div className='p-2 bg-blue-300 rounded-full shadow-md'>
					50 💎
				</div>
			</div>
			<div className='flex flex-col py-2'>
				<RedeemItem />
				<RedeemItem />
				<RedeemItemS />
			</div>
		</div>
	);
}

export default Redeem;
