import React from 'react';
import './App.css';
import './content/css/main.css'

import News from './content/news';
import Trends from './content/trends';
import Header from './content/header';
import Footer from './content/footer'


import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header></Header>
        <Switch>
          <Route exact path="/" render={(props) => (
            <News url={props.match.url} />
          )} />
          <Route exact path='/search' render={(props) => (
            <div>
              <News url={props.match.url} />
              <Trends />
            </div>
          )} />
          <Route exact path='/content' render={(props) => (
            <div>
              <News url={props.match.url} />
              <Trends />
            </div>
          )} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;