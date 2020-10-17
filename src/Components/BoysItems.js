import React from "react";

const BoysItems = (props) => {
  const { title, ratings, img, price } = props.kidsboys;
  const { kidsboys, addToCart } = props;
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

        <button id="add-to-cart" onClick={() => addToCart(kidsboys)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default BoysItems;
