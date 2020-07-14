import React from 'react';
import { HashRouter, BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import App from './App';


const Router = process.env.NODE_ENV === 'production' ? HashRouter : BrowserRouter;
ReactDOM.render(
        <Router>
            <App />
        </Router>,
  document.getElementById('root')
);


