import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer'
import './index.css';
import reportWebVitals from './reportWebVitals';
function Page(){
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>
)
reportWebVitals();