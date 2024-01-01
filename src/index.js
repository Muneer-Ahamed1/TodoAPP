import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import store from "./Store.jsx"
import {Provider} from "react-redux"

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(<Provider store={store}></Provider>)
root.render(
  
  <Provider store={store}>
        <App />
  </Provider>
);


