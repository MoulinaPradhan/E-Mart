import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

const MakeupItems = (props) => {
  const { title, ratings, img, price } = props.makeup;
  const { makeup, addToCart } = props;
  return (
    <div>
      <div className="card">
        <img src={img} />
        <h4>{title}</h4>
        <p className="price">Price:₹{price}</p>
        <p className="ratings">
          Ratings:
          <img className="stars" src={ratings} />
        </p>

        <button id="add-to-cart" onClick={() => addToCart(makeup)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default MakeupItems;
