import React, { useEffect, useState } from 'react';
import useFirebase from '../hooks/useFirebase';

const MOCKING_USER = 'SPnx58ZW8iu0A5rftlqA';

function Profile() {
	const [user, setUser]: [user: any, setData: any] = useState(null);
	const [checkins, setCheckins]: [
		checkins: any,
		setCheckins: any
	] = useState(null);
	const [badges, setBadges]: [badges: any, setBadges: any] = useState(null);
	const [loading, setLoading]: [loading: any, setLoading: any] = useState(
		true
	);
	const firebase = useFirebase();
	useEffect(() => {
		async function fetchData() {
			const userRef = firebase
				.firestore()
				.collection('users')
				.doc(MOCKING_USER);
			const userDoc = await userRef.get();
			setUser(userDoc.data());

			const badgeRef = firebase.firestore().collection('badges');
			const badgesDocs = await badgeRef.get();
			const badgesData: any = [];
			badgesDocs.forEach((doc: any) => {
				badgesData.push({ id: doc.id, ...doc.data() });
			});
			setBadges(badgesData);
			console.log('data', badgesData);

			const checkinRef = firebase.firestore().collection('checkins');
			const checkinsDocs = await checkinRef
				.where('user', '==', MOCKING_USER)
				.get();
			const checkinsData: any = [];
			checkinsDocs.forEach((doc: any) => {
				checkinsData.push({ id: doc.id, ...doc.data() });
			});
			setCheckins(checkinsData);
			setLoading(false);
		}
		fetchData();
	}, []);
	return (
		<>
			{!loading && (
				<div className='flex flex-row w-full justify-center'>
					<div className='rounded overflow-hidden shadow max-w-xs my-3'>
						<img
							src='https://i.imgur.com/dYcYQ7E.png'
							className='w-full'
						/>
						<div className='flex justify-center -mt-8'>
							<img
								src={user.image}
								className='rounded-full border-solid border-white border-2 -mt-3 w-32'
							/>
						</div>
						<div className='text-center px-3 pb-6 pt-2'>
							<h2 className='text-black text-lg bold font-sans'>
								{user.name}
							</h2>

							<p className='font-sans font-light text-grey-dark'>
								{user.about}
							</p>
						</div>
						<div className='p-4 bg-gray-100'>
							<h2 className='font-bold'>🏆 Badges</h2>
							<div className='flex'>
								{badges.map((badge: any) => {
									return <img
										src={badge.image}
										className='rounded-full border-solid border-white border-2 w-16 h-16'
									/>;
								})}
							</div>
						</div>
						<div className='p-4 bg-gray-100 rounded'>
							<h2 className='font-bold'>
								Recent Check In
							</h2>
							<ul>
								{checkins
									.map((checkin: any) => {
										return (
											<li>- {checkin.name}</li>
										);
									})
									.reverse()}
							</ul>
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Profile;
