import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export let dialogsData = [
  {
    id: 0,
    name: "Pete",
  },
  {
    id: 1,
    name: "Tatiana",
  },
  {
    id: 2,
    name: "Vladimir",
  },
  {
    id: 3,
    name: "Alexey",
  },
  {
    id: 4,
    name: "Nikolay",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

