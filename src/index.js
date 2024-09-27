import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importing the default CSS
import App from './App'; // Importing the main App component
import reportWebVitals from './reportWebVitals'; // Optional for measuring performance

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
