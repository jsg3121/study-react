import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AntDesignContainer from './container/AntDesignContainer';
import { Button } from 'antd';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Button type="primary" size="middle">
              <Link to="/antDesign">antDesign</Link>
            </Button>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/antDesign">
          <AntDesignContainer></AntDesignContainer>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
