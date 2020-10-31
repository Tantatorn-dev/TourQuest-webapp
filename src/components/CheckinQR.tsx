import React from 'react';
import useFirebase from '../hooks/useFirebase';
import QrReader from 'react-qr-reader';

const MOCKING_USER = 'SPnx58ZW8iu0A5rftlqA';

function CheckinQR() {
	// const [qrResult, setQrResult] = useState('');
	const firebase = useFirebase();

	const handleScan = async (data: string | null) => {
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
		<div>
			<h1 className='text-2xl'>Scan QR for check-in</h1>
			<QrReader
				delay={300}
				onError={handleScanError}
				onScan={handleScan}
			/>
		</div>
	);
}

export default CheckinQR;
