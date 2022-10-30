import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div style={{textAlign: 'center'}} >
      <h1 style={{marginBottom: '10%', backgroundColor:'aqua', padding:'20px'}}>Configuring Webpack, Babel, Linting</h1>
    <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);
