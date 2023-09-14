import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RESET } from './styles';
import { Global } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Global styles={RESET} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
