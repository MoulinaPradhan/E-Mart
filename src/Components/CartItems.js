import React from "react";
const CartItems = (props) => {
  const { title, ratings, qty, img, price } = props.item;
  const { cart, item, onIncrease, onDecrease, onDelete } = props;
  return (
    <div id="CartContainer">
      <div className="CartItem" style={{ marginLeft: 250}}>
        <img id="main-img" src={img}/>
        <div className="cart-right">
          <h4>{title}</h4>
          <p className="price">Price:₹{price}</p>
          <p className="ratings">
            Ratings:
            <img className="stars" src={ratings} />
          </p>
          <p className="qty">qty:{qty}</p>
        </div>
        <div id="icons">
          <img
            onClick={() => onIncrease(item)}
            id="increase"
            src="https://image.flaticon.com/icons/svg/992/992651.svg"
          />
          <img
            onClick={() => onDecrease(item)}
            src="https://image.flaticon.com/icons/svg/659/659892.svg"
          />
          <img
            onClick={() => onDelete(item.id)}
            id="delete"
            src="https://image.flaticon.com/icons/svg/1345/1345823.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItems;
