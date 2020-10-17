import React from "react";
import BillItems from "./BillItems";

const Bill = (props) => {
  const { cart } = props;
  return (
    <div>
      <div id="Billitems">
        <div id="tags">
          <div id="product-name">Name of the Product </div>
          <div id="quantity">qty </div>
          <div id="each-price">price/item</div>
        </div>
        {cart.map((item) => {
          return <BillItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Bill;
