import React, { useEffect, useState } from 'react';
import firebase from 'firebase';

const MOCKING_USER = 'SPnx58ZW8iu0A5rftlqA';

function Profile() {
	const [user, setUser]: [user: any, setData: any] = useState(null);
	const [checkins, setCheckins]: [
		checkins: any,
		setCheckins: any
	] = useState(null);
	const [badges, setBadges]: [badges: any, setBadges: any] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
			const userRef = firebase
				.firestore()
				.collection('users')
				.doc(MOCKING_USER);
			const userDoc = await userRef.get();
			setUser(userDoc.data());

			const badgeRef = firebase.firestore().collection('badges');
			const badgesDocs = await badgeRef.get();
			const badgesData: any = [];
			badgesDocs.forEach((doc) => {
				badgesData.push({id: doc.id, ...doc.data()});
            });
            setBadges(badgesData);

			const checkinRef = firebase.firestore().collection('checkins');
			const checkinsDocs = await checkinRef.where('user', '==', MOCKING_USER).get();
			const checkinsData: any = [];
			checkinsDocs.forEach((doc) => {
				checkinsData.push({id: doc.id, ...doc.data()});
            });
            setCheckins(checkinsData);

            console.log(userDoc.data());
            console.log(badgesData);
            console.log(checkinsData);
		};
        fetchData();
	}, []);
	return <>{user && user.name}</>;
}

export default Profile;
