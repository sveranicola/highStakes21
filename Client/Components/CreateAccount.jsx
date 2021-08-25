import React, {useState, useEffect} from 'react';
import {Switch, Link} from 'react-router-dom';
import axios from 'axios';



var CreateAccount = () => {
  var [NewUserName, updateNewUser] = useState('');
  var [NewPassword, updateNewPassword] = useState('');
  var [exists, updateExists] = useState(true);

  var nameOfNewUser = (input) => {
    updateNewUser(input);
  }
  var passwordOfNewUser = (input) => {
    updateNewPassword(input);
  }

  var checkIfAvailable = (e, username, wordpass) => {
    e.preventDefault();
    var obj = JSON.stringify({"username": username, "wordpass": wordpass});
    axios({
      method: 'get',
      url:'/availableUser',
      params: obj
    })
    .then(data => {
      if(data.data.exists === true) {
        alert('choose another user name');
      } else {
        updateExists(false);
      }
      // } else {
      //   axios.post('/createUser', obj)
      //   .then(data => /* render something */ null)
      //   .catch(err => {throw err});
      // }
    })
    .catch(err => {throw err});
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
        <button className="inputs" onClick={e => checkIfAvailable(e, NewUserName, NewPassword)}>Create Account</button>
      </div>
      <div>
        Already a Member?
        <Switch>
          <Link to='/LetsPlay'> Login</Link>
        </Switch>
      </div>
      <div>
        {exists ? null :
          <div className="playingTable">
            <Switch>
              <Link to='/CoinFLip' className='PlayButton'> Play the game </Link>
            </Switch>
          </div>
        }
      </div>
    </div>
  )
}

export default CreateAccount;