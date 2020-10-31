import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import QuestMap from "./components/QuestMap";
import PlaceDetail from "./pages/PlaceDetail";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/map">Map</Link>
            </li>
            <li>
              <Link to="/detail">Detail</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/map">
            <QuestMap />
          </Route>
          <Route path="/detail">
            <PlaceDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
