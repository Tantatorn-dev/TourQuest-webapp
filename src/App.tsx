import React from 'react';
import useFirebase from './hooks/useFirebase';
import './styles/main.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PlaceDetail from './pages/PlaceDetail';
import Profile from './pages/Profile';
import QuestMap from './pages/QuestMap';
import Appbar from './components/Appbar';
import CheckinQR from './components/CheckinQR';
import 'leaflet/dist/leaflet.css';
import SuccessPage from './pages/SuccessPage';
import Modal from 'react-modal';
// import Hint from './components/Hint';
import Redeem from './pages/Redeem';

Modal.setAppElement('#root');

function App() {
	const firebase = useFirebase();
	return (
		<Router>
			<div className='gradient-teal h-screen'>
				<Appbar />
				<Switch>
					<Route path='/' exact component={QuestMap} />
					<div className='m-4'>
						<Route path='/check-in-qr'>
							<CheckinQR />
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
						<Route
							path='/success'
							component={SuccessPage}
						></Route>
						<Route path='/redeem' component={Redeem} />
						<Route path='/profile'>
							<Profile />
						</Route>
					</div>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
