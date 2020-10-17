import React from "react";

class Signup extends React.Component {
  render() {
    return (<div className="login-container">
    <form classname="forms">
        <h4>Create an account</h4>
        <label for="first-name">First Name</label>
      <input type="text" name="name"  id="name" placeholder =""/>
      <label for="Last-name">Last Name</label>
      <input type="text" name="name"  id="name" placeholder =""/>
      <label for="email">E mail</label>
      <input type="email" name="email"  id="mail" placeholder ="abc@mail.com"/>
      <label for="email">Password</label>
      <input type="password" name="pass"  id="pass" placeholder ="password" minLength="8" maxLength="14"/></form>
      <p className="recovery">Forget password?</p>
      <button classname="button" type="submit">Signup</button>
      <button classname="button" type="reset">Cancel</button>
      </div>
      );
  }
}

export default Signup;
