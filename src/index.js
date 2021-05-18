import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const router = <BrowserRouter> <App /> </BrowserRouter>;

ReactDOM.render(router, document.getElementById('root'));

reportWebVitals();
