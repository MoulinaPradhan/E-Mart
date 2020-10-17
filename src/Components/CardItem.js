import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

const CardItem = (props) => {
  const { title, ratings, img, price } = props.front;
  const { front, addToCart } = props;
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

        <button id="add-to-cart"  onClick={() => addToCart(front)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default CardItem;
