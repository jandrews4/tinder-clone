import React from 'react';
import './App.css';
import Header from './Header';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';

function App() {
  return (
    <div className="App">
      {/* header */}
      <Router>
        <Header />
        <Switch>
        <Route path="/chat">
          <h1>Chat page</h1>
        </Route>
        <Route path="/">
          <TinderCards/>
          <SwipeButtons />
        </Route>

        </Switch>

      {/* Cards */}
      {/* buttons below card */}

      {/* chat screen */}
      {/* individual chat screen */}
      </Router>

    </div>
  );
}

export default App;
