import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import AppRoutes from './routes/Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById('root')

);

reportWebVitals();
