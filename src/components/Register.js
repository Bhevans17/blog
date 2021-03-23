import React from "react";

class Register extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Register</h1>
        <form action='#'>
          <input type='email' placeholder='Email' />
          <br />
          <input type='password' placeholder='Password' />
          <br />
          <input type='password' placeholder='Confirm Password' />
          <br />
          <button type='text'>Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Register;
