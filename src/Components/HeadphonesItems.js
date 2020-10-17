import React from "react";

const HeadphonesItems = (props) => {
  const { title, ratings, img, price } = props.headphones;
  const { headphones, addToCart } = props;
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

        <button id="add-to-cart" onClick={() => addToCart(headphones)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default HeadphonesItems;
