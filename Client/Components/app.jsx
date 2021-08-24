import React, { useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home.jsx';
import About from './About.jsx';
import HowToPlay from './HowToPlay';
import NotForMe from './NotForMe';

var App = () => {
  return (
    <div>
      <h1>High Stakes 21</h1>
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
      </BrowserRouter>
    </div>
  )
}

export default App;