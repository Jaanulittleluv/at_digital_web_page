import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Body from './body';
import Header from './header';
import Footer from './footer';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Body />
    <Footer />
  </React.StrictMode>
);


reportWebVitals();
