import React from "react";

class Login extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <form action='#'>
          <input type='email' placeholder='Email' />
          <br />
          <input type='password' placeholder='Password' />
          <br />
          <button type='text'>Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
