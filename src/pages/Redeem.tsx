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

	const handleClick = async () => {
		firebase.firestore().collection('badges').add({
			user: 'SPnx58ZW8iu0A5rftlqA',
			image:
				'https://scontent.fbkk22-3.fna.fbcdn.net/v/t1.0-9/118769654_117689810056921_6614798674417583108_n.png?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_ohc=U8VfavJN4L0AX-5a-TR&_nc_ht=scontent.fbkk22-3.fna&oh=67c9a5881dedb0c2f29e2a3412d7de97&oe=5FC55987',
		});
	};

	return (
		<>
			<Modal isOpen={isOpen} contentLabel='Hint'>
				<div className='bg-gray-400'>
					{/* <img
						className='object-cover h-48 w-full ...'
						src={Cat}
					/> */}
				</div>
				<h2>Very good</h2>
				<button onClick={() => setIsOpen(false)}>close</button>
			</Modal>
			<div className='flex flex-row m-1 p-1 justify-around items-center bg-white rounded-lg shadow-lg'>
				<div className='ml-2'>
					<RiShoppingBagLine color='orange' size={32} />
				</div>
				<div className='flex flex-col flex-wrap w-2/5'>
					<div className='text-lg'>แลก Badge นักผจญภัย</div>
					<div>35 💎</div>
				</div>
				<button
					onClick={handleClick}
					className='bg-orange-500 p-1 rounded text-center text-white'
				>
					Redeem
				</button>
			</div>
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
