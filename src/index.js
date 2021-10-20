import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  // component we want to render
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // where to render it
  document.getElementById('root')
);
