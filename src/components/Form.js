import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Form extends Component {
    render() {
    return (
      <div>
        <form>
          <h2>Login to continue</h2>
          <input type="text" placeholder="enter your email" required></input>
          <input type="password" placeholder="enter your password" required></input>
          <br></br>
          <br></br>
          <button>Login</button>
          <button class="google-btn">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"></img>
            Signin with Google
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
