import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import HeaderContainer from './Container/HeaderContainer';
import LoginContainer from './Container/LoginContainer';
import MainContainer from './Container/MainContainer';

const App = () => {

  const loginCheck = useSelector(state => state);
  console.log(loginCheck);

  return (
    <div className="App">
      <HeaderContainer></HeaderContainer>
      <Route exact path="*">
        login ? <Redirect to="/main"></Redirect>
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
