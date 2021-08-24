import React, {useState, useEffect} from 'react';
import {Switch, Link} from 'react-router-dom';


var CreateAccount = () => {
  var [NewUserName, updateNewUser] = useState('');
  var [NewPassword, updateNewPassword] = useState('');

  var nameOfNewUser = (input) => {
    updateNewUser(input);
  }
  var passwordOfNewUser = (input) => {
    updateNewPassword(input);
  }


  return (
    <div>
      <h3> Please Login</h3>
      <div>
        <input type="text" placeholder="username" className="inputs" onChange={(e)=> {nameOfNewUser(e.target.value)}}></input>
      </div>
      <div>
        <input type="password" placeholder="password" className="inputs" onChange={(e)=> {passwordOfNewUser(e.target.value)}}></input>
      </div>
      <div>
        <button className="inputs">Create Account</button>
      </div>
      <div>
        Already a Member?
        <Switch>
          <Link to='/LetsPlay'> Login</Link>
        </Switch>
      </div>
    </div>
  )
}

export default CreateAccount;