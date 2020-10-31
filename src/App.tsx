import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import QuestMap from "./components/QuestMap";
import CheckinQR from './components/CheckinQR';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/map">Map</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/map" component={QuestMap} />
          <Route path="/check-in-qr" component={CheckinQR} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
