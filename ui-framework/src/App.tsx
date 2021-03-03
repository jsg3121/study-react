import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AntDesignContainer from './container/AntDesignContainer';

function App() {
  return (
    <Router>
      {/* <div>
        <ul>
          <li>
            <Button type="primary" size="middle">
              <Link to="/antDesign">antDesign</Link>
            </Button>
          </li>
          <li>
            <Button type="primary" size="middle">
              <Link to="/bluePrint">bluePrint</Link>
            </Button>
          </li>
          <li>
            <Button type="primary" size="middle">
              <Link to="/fluentUi">fluentUi</Link>
            </Button>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/antDesign">
          <AntDesignContainer></AntDesignContainer>
        </Route>
        <Route path="/bluePrint">
          <BluePrintContainer></BluePrintContainer>
        </Route>
        <Route path="/fluentUi">
          <FluentUIContainer></FluentUIContainer>
        </Route>
      </Switch> */}
      <Route path="/">
        <AntDesignContainer></AntDesignContainer>
      </Route>
    </Router>
  );
}

export default App;
