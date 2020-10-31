import firebase from 'firebase';

function useFirebase() {
	const firebaseConfig = {
		apiKey: 'AIzaSyDT56Jk03YNj86fIjcxfWzymlgmiuMrpaE',
		authDomain: 'tourquest-c3659.firebaseapp.com',
		databaseURL: 'https://tourquest-c3659.firebaseio.com',
		projectId: 'tourquest-c3659',
		storageBucket: 'tourquest-c3659.appspot.com',
		messagingSenderId: '134535806597',
		appId: '1:134535806597:web:d9e8ee69acbd24615c73ec',
		measurementId: 'G-8DQWL099DW',
	};
	// Initialize Firebase
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}

	return firebase;
}

export default useFirebase;
