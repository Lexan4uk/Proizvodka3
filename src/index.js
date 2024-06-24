import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './pages/Main';

import reportWebVitals from './reportWebVitals';
import './styles/base/fonts.scss';
import './styles/base/globals.scss';
import './styles/base/mixins.scss';
import './styles/base/normalize.scss';
import './styles/base/variables.scss';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
