import React from 'react';
import './App.css';
import './content/css/main.css'

import Body from './content/body'
import Footer from './content/footer'

import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Body></Body>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;