import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import QrReader from 'react-qr-reader';

const MOCKING_USER = 'SPnx58ZW8iu0A5rftlqA';

function CheckinQR({ firebase }: { firebase: any }) {
  // const [qrResult, setQrResult] = useState('');

	const handleScan = async (data: string | null) => {
		if (data) {
      // setQrResult(data);
      const checkinData = {
        place: data,
        timestamp: new Date(),
        user: MOCKING_USER
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
