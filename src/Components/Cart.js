import React from "react";
import login from "./login";
import CartContainer from "./CartContainer";

import * as firebase from "firebase";
import {
  BrowserRouter as Link,
  Route,
  Router,
  Switch,
  Redirect,
} from "react-router-dom";

class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };

    this.db = firebase.firestore();
  }
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
  handleIncreaseQuantity = (item) => {
    const { cart } = this.state;
    const index = cart.indexOf(item);
    const docRef = this.db.collection("cart").doc(cart[index].id);
    docRef
      .update({ qty: cart[index].qty + 1 })
      .then(() => {
        console.log("document updated sucessfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  handleDecreaseQuantity = (item) => {
    const { cart } = this.state;
    const index = cart.indexOf(item);

    if (cart[index].qty === 0) {
      return;
    }
    const docRef = this.db.collection("cart").doc(cart[index].id);
    docRef
      .update({ qty: cart[index].qty - 1 })
      .then(() => {
        console.log("document reduced sucessfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  handleDeleteProduct = (id) => {
    const { cart } = this.state;
    const docRef = this.db.collection("cart").doc(id);
    docRef
      .delete()
      .then(() => {
        console.log("Deleted sucessfully");
      })
      .catch((err) => {
        console.log(err);
      });
  }; 

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
    const { cart } = this.state;
    return (
      <div>
       
        <div id="cart-heading"></div>

        <div id="getTotal">Total: ₹{this.getcartTotal()}.00/-</div>

        <CartContainer
          cart={cart}
          onIncrease={this.handleIncreaseQuantity}
          onDecrease={this.handleDecreaseQuantity}
          onDelete={this.handleDeleteProduct}
          cart={cart}
        />
      </div>
    );
  }
}
export default Cart;
