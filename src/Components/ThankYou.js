import React from "react";
import Contact from "./Contact";
import Bill from "./Bill";
import CartContainer from "./CartContainer";
import * as firebase from "firebase";

import "bootstrap/dist/css/bootstrap.min.css";

class ThankYou extends React.Component {
  constructor() {
    super();
    this.state = {
      contact: [],
      cart: [],
      loading: true,
    };
    this.db = firebase.firestore();
  }
  componentDidMount() {
    this.setState({
      loading: true,
    });

    this.db.collection("contact").onSnapshot((snapshot) => {
      const contact = snapshot.docs.map((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });
      this.setState({ contact: contact, loading: false });
    });
    this.db.collection("cart").onSnapshot((snapshot) => {
      const cart = snapshot.docs.map((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });
      this.setState({ cart: cart });
    });
  }
  getcartTotal = () => {
    const { cart } = this.state;
    let cartTotal = 0;

    cart.map((item) => {
      if (item.qty > 0) {
        cartTotal = cartTotal + item.qty * item.price;
      }
      return "";
    });

    return cartTotal;
  };

  render() {
    const { contact, cart, loading } = this.state;

    return (
      <div>
        {loading && (
          <div id="spinner">
            <img
              id="at-symbol"
              src="https://image.flaticon.com/icons/svg/2658/2658131.svg"
            />
          </div>
        )}
        <div id="bill">
          <h1 id="thankyou">Thank You !</h1>
          <h5>Here's Your Bill</h5>
          <div id="main-bill">
            <Contact contact={contact} />
            <Bill cart={cart} />
            <b id="total" style={{marginRight:20}}>Total Amount: ₹{this.getcartTotal()}.00</b>
          </div>
        </div>
      </div>
    );
  }
}

export default ThankYou;
