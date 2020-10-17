import React from "react";
import Search from "./Search";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import * as firebase from "firebase";

class Head extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
    this.db = firebase.firestore();
  }
  toggle = () => {
    document.getElementById("cart-div").classList.add("active-cart");
  };
  componentDidMount() {
    this.db.collection("cart").onSnapshot((snapshot) => {
      const cart = snapshot.docs.map((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });
      this.setState({ cart: cart });
    });
  }
  getcountOfCartItems = () => {
    const { cart } = this.state;
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });
    return count;
  };
  render() {
    return (
      <div>
        <Navbar expand="md" bg="dark" variant="dark">
          <Link
            to="/"
            onClick={() => {
              document
                .getElementById("cart-div")
                .classList.remove("active-cart");
            }}
          >
            <Navbar.Brand style={{ fontSize: 33, marginTop: -10 }}>
              E-m
              <img
                style={{ height: 22, width: 22 }}
                id="at-symbol"
                src="https://image.flaticon.com/icons/svg/2658/2658131.svg"
              />
              rt
            </Navbar.Brand>
          </Link>
          <Nav className="mr-auto"></Nav>
          <Search />
          <div id="myaccount">
            <div id="account">
              <Link to="/login">
                <img
                  onClick={() => {
                    document
                      .getElementById("cart-div")
                      .classList.remove("active-cart");
                  }}
                  id="avatar"
                  src="https://image.flaticon.com/icons/svg/3084/3084627.svg"
                />
              </Link>
              <p id="snippet">
                Create an account to buy products from
                <strong style={{ color: "blue" }}>
                  <br />
                  E-m@rt
                </strong>{" "}
                and get exciting offers.
              </p>
            </div>
            <span id="account-holder">My Account</span>
          </div>

          <div id="cart-div">
            <span id="total-count">{this.getcountOfCartItems()}</span>
            <Link to="/cart">
              <img
                onClick={this.toggle}
                id="cartImg"
                src="https://image.flaticon.com/icons/svg/875/875536.svg"
              />
            </Link>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Head;
