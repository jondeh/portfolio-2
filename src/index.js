import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {HashRouter as Router} from 'react-router-dom';
import {AppProvider} from './context/AppContext';

ReactDOM.render(
  <Router>
    <AppProvider>
      <React.StrictMode>
      <App />
      </React.StrictMode>
    </AppProvider>
  </Router>,
  document.getElementById('root')
  
);
