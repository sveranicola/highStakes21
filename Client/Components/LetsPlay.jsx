import React, {useState, useEffect} from 'react';
import {Switch, Link} from 'react-router-dom';


var LetsPlay = () => {
  var [userName, updateUser] = useState('');
  var [password, updatePassword] = useState('');

  var nameOfUser = (input) => {
    updateUser(input);
  }
  var passwordOfUser = (input) => {
    updatePassword(input);
  }


  return (
    <div>
      <h3> Please Login</h3>
      <div>
        <input type="text" placeholder="username" className="inputs" onChange={(e)=> {nameOfUser(e.target.value)}}></input>
      </div>
      <div>
        <input type="password" placeholder="password" className="inputs" onChange={(e)=> {passwordOfUser(e.target.value)}}></input>
      </div>
      <div>
        <button className="inputs">Login</button>
      </div>
      <div>
        Not a member?
        <Switch>
          <Link to='/createAccount'> Create an Account</Link>
        </Switch>
      </div>
    </div>
  )
}

export default LetsPlay;