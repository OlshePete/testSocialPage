
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from "react";
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';


let callSubscriber = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>, document.getElementById("root")
  );
};
callSubscriber(store.getState());

store.subscribe(callSubscriber);

reportWebVitals();