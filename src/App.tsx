import React from 'react';
import useFirebase from './hooks/useFirebase';
import './styles/main.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PlaceDetail from './pages/PlaceDetail';
<<<<<<< HEAD
import Profile from './pages/Profile';
import QuestMap from './pages/QuestMap';
=======
import QuestMap from "./pages/QuestMap";
import Profile from "./pages/Profile";
>>>>>>> 9285aac18cf496a853abeafc01eadc15f290a2cc
import Appbar from './components/Appbar';
import CheckinQR from './components/CheckinQR';
import 'leaflet/dist/leaflet.css';
import SuccessPage from './pages/SuccessPage';
import Modal from 'react-modal';
<<<<<<< HEAD
// import Hint from './components/Hint';
=======
>>>>>>> 9285aac18cf496a853abeafc01eadc15f290a2cc
import Redeem from './pages/Redeem';


Modal.setAppElement('#root');

function App() {
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
							<PlaceDetail />
						</Route>
						<Route
							path='/success'
							component={SuccessPage}
						></Route>
						<Route path='/redeem' component={Redeem} />
<<<<<<< HEAD
						<Route path='/profile'>
							<Profile />
						</Route>
=======
					<Route path='/profile'>
						<Profile />
					</Route>
>>>>>>> 9285aac18cf496a853abeafc01eadc15f290a2cc
					</div>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
