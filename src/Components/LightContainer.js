import React from "react";
import LightItems from "./LightItems";

const LightContainer = (props) => {
  const { light } = props;

  return (
    <div className="cart">
      <h5 id="deal-of-the-day">Deal of the day</h5>
      <div id="card-container">
        {light.map((light) => {
          return (
            <LightItems
              light={light}
              key={light.id}
              addToCart={props.addToCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default LightContainer;
