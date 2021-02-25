import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import './App.css';
import HeaderContainer from './Container/HeaderContainer';
import MainContainer from './Container/MainContainer';

const App = () => {

  return (
    <div className="App">
      <HeaderContainer></HeaderContainer>
      <Route exact path="*">
        <Redirect to="/main"></Redirect>
        <MainContainer></MainContainer>
      </Route>
    </div>
  );
};


export default App;
