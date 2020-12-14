import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from './view/main';
import Board from './view/board';
import Login from './view/login';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/board">board</Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/board">
          <Board />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
