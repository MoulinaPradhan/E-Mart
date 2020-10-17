import React from "react";
import CartItems from "./CartItems";
import {
  BrowserRouter as Route,
  Router,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";

const CartContainer = (props) => {
  const { cart } = props;
  return (
    <div>
      <div id="cards-container">
        <Link to="/">
          <button id="shop-more"  onClick={()=>{document.getElementById("cart-div").classList.remove("active-cart");}}>shop more</button>
        </Link>
        <Link to="/login">
          <button id="proceed-to-pay"  onClick={()=>{document.getElementById("cart-div").classList.remove("active-cart");}}>proceed to pay</button>
        </Link>
        <div style={{marginTop:20}}>
        {cart.map((item) => {
          return (
            <CartItems
              item={item}
              key={item.id}
              onIncrease={props.onIncrease}
              onDecrease={props.onDecrease}
              onDelete={props.onDelete}
            />
          );
        })}
        </div>
      </div>
    </div>
  );
};

export default CartContainer;
