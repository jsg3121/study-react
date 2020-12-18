import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./view/login";
import Main from "./view/main";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Router>
        {/* <div className="App">
        <ul>
          <li>
            <Link to="/Main">Main</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
          <li>
            <Link to="/board">board</Link>
          </li>
        </ul>
      </div> */}
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/Main">
          <Main />
        </Route>
        <Redirect to="/login">
          <Login />
        </Redirect>
      </Router>
    </React.Fragment>
  );
}

export default App;
