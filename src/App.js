import React from 'react';
import './App.css';
import './content/css/main.css'

import Body from './content/body'
// import Header from './content/header';
import Footer from './content/footer'

import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        {/* <Header></Header> */}
        <Body></Body>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;