import React from "react";

const HouseItems = (props) => {
  const { title, ratings, img, price } = props.house;
  const { house, addToCart } = props;
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

        <button id="add-to-cart" onClick={() => addToCart(house)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default HouseItems;
