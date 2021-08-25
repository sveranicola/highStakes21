import React from 'react';
import {Switch, Link} from 'react-router-dom';

var Home = () => {
  return (
    <div>
      <h2>Welcome to High Stakes</h2>
      <h3>Where losing means being banned!</h3>

      <h3>Want to Play?</h3>

      <div>
        <Switch>
          <Link to='/LetsPlay' className='YesButton'>Let's PLay</Link>
        </Switch>
        <Switch>
          <Link to='/notForMe' className='NoButton'>NOPE</Link>
        </Switch>
      </div>

    </div>
  )
}

export default Home;