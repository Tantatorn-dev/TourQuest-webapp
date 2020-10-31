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
		async function fetchData () {
			const userRef = firebase.firestore().collection('users').doc(MOCKING_USER);
			const userDoc = await userRef.get();
			setUser(userDoc.data());

			const badgeRef = firebase.firestore().collection('badges');
			const badgesDocs = await badgeRef.get();
			const badgesData: any = [];
			badgesDocs.forEach((doc: any) => {
				badgesData.push({ id: doc.id, ...doc.data() });
			});
			setBadges(badgesData);

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
		};
		fetchData();
	}, []);
	return (
		<>
			{!loading && (
				<>
					<h2>{user.name}</h2>
					<p>{user.about}</p>
					<p>Level: {user.level}</p>
					<img src={user.image} alt='' width='64' />
				</>
			)}
		</>
	);
}

export default Profile;
