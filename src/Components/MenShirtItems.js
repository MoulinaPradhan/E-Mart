import React from "react";

const MenShirtItems = (props) => {
  const { title, ratings, img, price } = props.menshirt;
  const { menshirt, addToCart } = props;
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

        <button id="add-to-cart" onClick={() => addToCart(menshirt)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default MenShirtItems;
