import React from "react";
import HeadphonesItems from "./HeadphonesItems";

const HeadphonesContainer = (props) => {
  const { headphones } = props;

  return (
    <div className="cart">
      <h5 id="deal-of-the-day">Deal of the day</h5>
      <div id="card-container">
        {headphones.map((headphones) => {
          return (
            <HeadphonesItems
              headphones={headphones}
              key={headphones.id}
              addToCart={props.addToCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HeadphonesContainer;
