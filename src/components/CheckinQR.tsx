import React from 'react';
import useFirebase from '../hooks/useFirebase';
import { MdLocationOn } from 'react-icons/md';
import QrReader from 'react-qr-reader';
import { useHistory } from 'react-router-dom';

const MOCKING_USER = 'SPnx58ZW8iu0A5rftlqA';

function CheckinQR() {
	// const [qrResult, setQrResult] = useState('');
	const firebase = useFirebase();
	const history = useHistory();

	const handleScan = async (data: string | null) => {
		console.log(history);
		if (data) {
			const checkinData = {
				place: data,
				timestamp: new Date(),
				user: MOCKING_USER,
			};
			await firebase.firestore().collection('checkins').add(checkinData);
		}
	};

	const handleScanError = (err: any) => {
		console.error(err);
	};

	return (
		<div className="flex flex-col w-full shadow-lg h-full p-4 gradient-item rounded-lg bg-white">
			<div className='flex flex-row items-center text-2xl p-2 text-center'>
				<MdLocationOn />
				Scan QR for check-in
			</div>
			<QrReader
				delay={300}
				onError={handleScanError}
				onScan={handleScan}
			/>
		</div>
	);
}

export default CheckinQR;
