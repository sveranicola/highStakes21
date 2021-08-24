import React from 'react';
import {Switch, Link} from 'react-router-dom';


var NavBar = () => {
  return (
    <div>
      <Switch>
        <Link to='/' className='navButton'>Home</Link>
      </Switch>
      <Switch>
        <Link to='/howToPlay' className='navButton'>How To Play</Link>
      </Switch>
      <Switch>
        <Link to='/about' className='navButton'>About Us</Link>
      </Switch>

    </div>
  )
}

export default NavBar;