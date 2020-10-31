import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import QuestMap from "./components/QuestMap";
import 'leaflet/dist/leaflet.css';

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
          <Route path="/map">
            <QuestMap />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
