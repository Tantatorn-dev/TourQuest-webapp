import React from 'react';
import useFirebase from './hooks/useFirebase';
import './styles/main.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PlaceDetail from './pages/PlaceDetail';
import QuestMap from "./pages/QuestMap";
import Profile from "./pages/Profile";
import Appbar from './components/Appbar';
import CheckinQR from './components/CheckinQR';
import 'leaflet/dist/leaflet.css';
import SuccessPage from './pages/SuccessPage';
import Modal from 'react-modal';
import Redeem from './pages/Redeem';


Modal.setAppElement('#root');

function App() {
	return (
		<Router>
			<div className="gradient-teal h-screen">
				<Appbar />
				<Switch>
					<Route path='/' exact component={QuestMap} />
					<div className='m-4'>
						<Route path='/check-in-qr'>
							<CheckinQR />
						</Route>
						<Route path='/detail'>
							<PlaceDetail />
						</Route>
						<Route path='/success' component={SuccessPage}></Route>
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
