import React, { useEffect } from 'react';
import './styles/main.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import firebase from 'firebase';
import PlaceDetail from './pages/PlaceDetail';
import Profile from './pages/Profile';
import QuestMap from "./components/QuestMap";
import CheckinQR from './components/CheckinQR';
import 'leaflet/dist/leaflet.css';

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
		firebase.analytics();
	}, []);
	return (
		<Router>
			<div>
				<nav>
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
				</nav>
				<Switch>
					<Route path="/map" component={QuestMap} />
					<Route path="/check-in-qr" component={CheckinQR} />
					<Route path='/detail'>
						<PlaceDetail id={'2P0oCX8wWZdG7ISokBrI'} name={''} image={''} detail={''} />
					</Route>
          <Route path='/profile'>
						<Profile />
					</Route>
        </Switch>
      </div>
    </Router>
  );

}

export default App;
