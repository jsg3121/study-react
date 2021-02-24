import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import HeaderContainer from './Container/HeaderContainer';
import LoginContainer from './Container/LoginContainer';
import MainContainer from './Container/MainContainer';

const App = () => {
  return (
    <div className="App">
      <HeaderContainer></HeaderContainer>
      <Route exact path="*">
        {
          state.login.loginVal ? <Redirect to="/main"></Redirect> : <Redirect to="/login"></Redirect>
        }
      </Route>
      <Switch>
        <Route path="/main">
          <MainContainer></MainContainer>
        </Route>
        <Route path="/login">
          <LoginContainer></LoginContainer>
        </Route>
      </Switch>
    </div>
  );
};


export default App;
