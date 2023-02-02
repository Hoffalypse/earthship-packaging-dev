import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider, provider} from 'react-redux'
import store from './store'
import 'bootswatch/dist/slate/bootstrap.min.css';
import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
);


reportWebVitals();
