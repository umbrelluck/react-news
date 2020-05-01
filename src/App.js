import React from 'react';
import './App.css';
import './content/css/main.css'

import News from './content/news';
import Trends from './content/trends';
import Header from './content/header';
import Footer from './content/footer'

var page = { "main": false };

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Trends page={page}></Trends>
      <News page={page} />
      <Footer />
    </div>
  );
}

export default App;