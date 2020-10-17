import React from "react";

const LightItems = (props) => {
  const { title, ratings, img, price } = props.light;
  const { light, addToCart } = props;
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

        <button id="add-to-cart" onClick={() => addToCart(light)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default LightItems;
