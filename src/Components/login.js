import React from "react";
import fire from "../config/fire";
import * as firebase from "firebase";
import { BrowserRouter as Router, Redirect, Link } from "react-router-dom";
class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      address: "",
      password: "",
      fireErrors: "",
      formTitle: "Login",
      loginBtn: true,
      isProgress: false,
      sucessMsg: "",
      register: false,
      logged: false,
    };
    this.db = firebase.firestore();
  }
  logout = () => {
    fire.auth().signOut();
  };
  login = (e) => {
    e.preventDefault();
    fire
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(() => {
        return fire
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password);
      })
      .then((sucesss) => {
        this.setState({ sucessMsg: "Sucessfully Logged In", fireErrors: "" });
      })
      .then((sucess) => {
        this.setState({ logged: true });
      })

      .catch((error) => {
        this.setState({ fireErrors: error.message });
      });
  };

  register = (e) => {
    e.preventDefault();
    this.db.collection("contact").doc("GlDtWmI4Xcg9goiHBB7U").set({
      name: this.state.name,
      address: this.state.address,
    });
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((sucess) => {
        this.setState({ sucessMsg: "You are now registered" });
      })
      .catch((error) => {
        this.setState({ fireErrors: error.message });
      });
  };

  getAction = (action) => {
    if (action === "reg") {
      this.setState({
        formTitle: "Register New User",
        register: true,
        loginBtn: false,
        fireErrors: "",
      });
    } else {
      this.setState({
        formTitle: "Login",
        register: false,
        loginBtn: true,
        fireErrors: "",
      });
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    //const email = e.target.value;
    //localStorage.setItem("email", email);
    //this.setState({ email });
  };

  render() {
    let errorNotification = this.state.fireErrors ? (
      <div className="Error"> {this.state.fireErrors} </div>
    ) : null;

    let sucessNotification = this.state.sucessMsg ? (
      <div className="sucess">{this.state.sucessMsg}</div>
    ) : null;
    let linked = this.state.logged ? (
      <Link to="thankyou">
        <button id="place-order">order details</button>
      </Link>
    ) : null;
    let RegisterForm = this.state.register ? (
      <div>
        <div className="Tags">Name</div>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <div className="Tags">Address</div>
        <textarea
          type="text"
          cols="32"
          rows="3"
          name="address"
          value={this.state.address}
          onChange={this.handleChange}
        />
      </div>
    ) : null;

    let submitBtn = this.state.loginBtn ? (
      <input
        className="loginBtn"
        type="submit"
        onClick={this.login}
        value="Enter"
      />
    ) : (
      <input
        className="loginBtn"
        type="submit"
        onClick={this.register}
        value="Register"
      />
    );

    let login_register = this.state.loginBtn ? (
      <button className="registerBtn" onClick={() => this.getAction("reg")}>
        Register
      </button>
    ) : (
      <button className="registerBtn" onClick={() => this.getAction("login")}>
        Login
      </button>
    );

    return (
      <div className="slider">
        <div className="upperSlider"></div>
        <div className="form_block">
          <div id="title">{this.state.formTitle}</div>
          <div className="body">
            {errorNotification}
            {sucessNotification}
            <form>
              {RegisterForm}
              <div className="Tags">Email</div>
              <input
                type="text"
                autoComplete="off"
                value={this.state.email}
                onChange={this.handleChange}
                name="email"
                required
              />
              <div className="Tags">Password</div>
              <input
                type="password"
                autoComplete="off"
                value={this.state.password}
                onChange={this.handleChange}
                name="password"
                required
              />
              <button id="logoutBtn" onClick={this.logout}>
                Logout
              </button>
              {submitBtn}
            </form>
            {login_register}
          </div>
          {linked}
        </div>
      </div>
    );
  }
}

export default login;
