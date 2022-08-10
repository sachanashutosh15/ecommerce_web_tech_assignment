import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{textAlign: "center", backgroundColor: "skyblue", padding: "10px"}}>
      <h1>Available Products</h1>
    </div>
    <App />
  </React.StrictMode>
);