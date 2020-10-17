import React from "react";
import BoysItems from "./BoysItems";

const BoysContainer = (props) => {
  const { kidsboys } = props;

  return (
    <div className="cart">
      <h5 id="deal-of-the-day">Deal of the day</h5>
      <div id="card-container">
        {kidsboys.map((kidsboys) => {
          return (
            <BoysItems
              kidsboys={kidsboys}
              key={kidsboys.id}
              addToCart={props.addToCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BoysContainer;
