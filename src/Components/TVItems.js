import React from "react";

const TVItems = (props) => {
  const { title, ratings, img, price } = props.TV;
  const { TV, addToCart } = props;
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

        <button id="add-to-cart" onClick={() => addToCart(TV)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default TVItems;
