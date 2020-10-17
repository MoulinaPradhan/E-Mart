import React from "react";
import HouseItems from "./HouseItems";

const HouseContainer = (props) => {
  const { house } = props;

  return (
    <div className="cart">
      <h5 id="deal-of-the-day">Deal of the day</h5>
      <div id="card-container">
        {house.map((house) => {
          return (
            <HouseItems
              house={house}
              key={house.id}
              addToCart={props.addToCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HouseContainer;
