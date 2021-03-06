import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Login from "./components/login/login";
import Main from "./components/main/main";
import Counter from "./components/Counter";

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
    // <div>
    //   <Counter number={1} color={"red"} onIncresment={undefined} onDecresment={undefined} onSetColor={undefined} />
    // </div>
  );
}

export default App;
