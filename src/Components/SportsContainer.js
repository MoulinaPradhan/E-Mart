import React from "react";
import SportsItems from "./SportsItems";

const SportsContainer = (props) => {
  const { sports } = props;

  return (
    <div className="cart">
      <h5 id="deal-of-the-day">Deal of the day</h5>
      <div id="card-container">
        {sports.map((sports) => {
          return (
            <SportsItems
              sports={sports}
              key={sports.id}
              addToCart={props.addToCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SportsContainer;
