import React from 'react';
import { createRoot } from 'react-dom/client';

import App from 'components/App';
import 'config/i18n';
import 'scss/application.scss';

import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root')!);

const renderApp = () => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// Render once
renderApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
