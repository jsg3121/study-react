import React from 'react';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import HeaderContainer from './containers/HeaderContainer';

const App = () => {
  return (
    <div>
      <CounterContainer />
      <HeaderContainer></HeaderContainer>
    </div>
  );
};

export default App;
