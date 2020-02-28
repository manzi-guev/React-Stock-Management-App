import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Form extends Component {
  render(){
    return (
      <div>
        <form>
          <h2>Login to continue</h2>
          <input type="text" placeholder="enter your email" required></input>
          <input
            type="password"
            placeholder="enter your password"
            required
          ></input>
          <br></br>
          <br></br>
          <Link to="/landing" className="log-button">
            Login
          </Link>
          <button class="google-btn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"></img>
            Signin with Google
          </button>
        </form>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <a href="#" className="forgot">Forgot Password?</a>
      </div>
    );
  };
  }

export default Form;
