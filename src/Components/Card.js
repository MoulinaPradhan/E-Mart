import React from "react";
import CardItem from "./CardItem";

const Card = (props) => {
  const { front } = props;

  return (
    <div className="cart">
      <h5 id="deal-of-the-day">Deal of the day</h5>
      <div id="card-container">
        {front.map((front) => {
          return (
            <CardItem
              front={front}
              key={front.id}
              addToCart={props.addToCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Card;
