import React from "react";
const BillItems = (props) => {
  const { title, ratings, qty, img, price } = props.item;
  const { cart, item } = props;
  return (
    <div id="BillContainer">
        
      <div id="product">{title} </div>
      <div id="number">{qty} </div>
      <div id="item-price">₹{price}.00</div>
    </div>
  );
};

export default BillItems;
