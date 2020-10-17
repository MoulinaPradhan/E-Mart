import React from "react";
import MenPantItems from "./MenPantItems";

const MenPantContainer = (props) => {
  const { pant } = props;

  return (
    <div className="cart">
      <h5 id="deal-of-the-day">Deal of the day</h5>
      <div id="card-container">
        {pant.map((pant) => {
          return (
            <MenPantItems
              pant={pant}
              key={pant.id}
              addToCart={props.addToCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenPantContainer;
