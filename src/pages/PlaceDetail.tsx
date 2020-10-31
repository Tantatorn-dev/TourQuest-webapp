import React from 'react';
import { useHistory } from 'react-router-dom';

function PlaceDetail({
	name,
	detail,
	image,
	id,
}: {
	name: string;
	detail: string;
	image: string;
	id: string;
}) {
    const history = useHistory();
	return (
		<div className='flex flex-col w-full items-center'>
			<h2 className='text-xl font-bold mb-2'>{name}</h2>
			<img
				src={image}
				width={300}
				className='rounded-lg md:w-56 mb-2'
			></img>
			<p className='text-base mb-4'>Description: {detail}</p>
            <button 
            onClick={() => history.push('/check-in-qr')}
            className='bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded'>
				Check in
			</button>
		</div>
	);
}

export default PlaceDetail;
