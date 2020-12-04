import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Test from './Test'; // 컴포넌트를 부를 땐 vue 처럼 import하여 ReactDom.render에 넣어주면 됨
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <Test/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();