import React, { useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home.jsx';
import About from './About.jsx';
import HowToPlay from './HowToPlay';
import NotForMe from './NotForMe';
import LetsPlay from './LetsPlay.jsx';
import CreateAccount from './CreateAccount.jsx';
import CoinFlip from './CoinFlip';

var App = () => {
  return (
    <div>
      <h1>High Stakes</h1>
      <BrowserRouter>
        <NavBar />
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/about' exact>
          <About />
        </Route>
        <Route path='/howToPlay' exact>
          <HowToPlay />
        </Route>
        <Route path='/NotForMe' exact>
          <NotForMe />
        </Route>
        <Route path='/LetsPlay' exact>
          <LetsPlay />
        </Route>
        <Route path='/createAccount' exact>
          <CreateAccount />
        </Route>
        <Route path='/CoinFlip' exact>
          <CoinFlip />
        </Route>
      </BrowserRouter>
    </div>
  )
}

export default App;