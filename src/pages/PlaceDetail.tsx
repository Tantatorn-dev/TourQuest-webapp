import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { useHistory, withRouter } from 'react-router-dom';

function PlaceDetail(props: any) {
	const history = useHistory();
	return (
		<div className='static flex flex-col w-full shadow-lg h-full p-4 gradient-item rounded-lg'>
			<div className='absolute flex flex-row items-center justify-center text-xl left-2 p-2 bg-teal-500 text-white rounded shadow-lg'>
				<MdLocationOn />
				{props.location.state.name}
			</div>
			<img
				src={props.location.state.image}
				alt='Image of spot'
				width={'100%'}
				className='rounded-lg md:w-56 mb-2'
			/>
			<div className='flex flex-col'>
				<div className='text-xl'>Description</div>
				<p className='text-base mb-4'>
					{props.location.state.detail}
				</p>
			</div>
			<button
				onClick={() =>
					history.push('/check-in-qr', {
						name: props.location.state.name,
					})
				}
				className='flex flex-row items-center justify-center bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded'
			>
				<MdLocationOn />
				Check in
			</button>
		</div>
	);
}

export default withRouter(PlaceDetail);
