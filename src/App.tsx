import React, { useEffect } from 'react';
import './styles/main.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import firebase from 'firebase';
import PlaceDetail from './pages/PlaceDetail';
import QuestMap from "./pages/QuestMap";
import Appbar from './components/Appbar';
import CheckinQR from './components/CheckinQR';
import 'leaflet/dist/leaflet.css';
import SuccessPage from './pages/SuccessPage';
import { fireEvent } from '@testing-library/react';

function App() {
	useEffect(() => {
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
		firebase.initializeApp(firebaseConfig);
	}, []);
	return (
		<Router>
			<div>
				{/* <nav>
					<ul>
						<li>
							<Link to='/map'>Map</Link>
						</li>
						<li>
							<Link to='/detail'>Detail</Link>
						</li>
						<li>
							<Link to='/profile'>Profile</Link>
						</li>
					</ul>
				</nav> */}
				<Appbar />
				<Switch>
					<Route path='/' exact component={QuestMap} />
					<div className='m-4'>
						<Route path='/check-in-qr'>
							<CheckinQR firebase={firebase} />
						</Route>
						<Route path='/detail'>
							<PlaceDetail
								id={'2P0oCX8wWZdG7ISokBrI'}
								name={'Wat Phra Kaew'}
								image={
									'https://lp-cms-production.imgix.net/2019-06/f38562393be73d571e111dbd0b060d58-wat-phra-kaew.jpg'
								}
								detail={
									'Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce leo augue, imperdiet sit amet odio a, imperdiet condimentum ante. Integer nec leo id nibh elementum posuere.'
								}
							/>
						</Route>
						<Route path='/success' component={SuccessPage}></Route>
					</div>
					{/* <Route path='/profile'>
						<Profile db={firebase.firestore()} />
					</Route> */}
				</Switch>
			</div>
		</Router>
	);
}

export default App;
