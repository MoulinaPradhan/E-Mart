import React from "react";
import DressItems from "./DressItems";

const DressContainer = (props) => {
  const { dress } = props;

  return (
    <div className="cart">
      <h5 id="deal-of-the-day">Deal of the day</h5>
      <div id="card-container">
        {dress.map((dress) => {
          return (
            <DressItems
              dress={dress}
              key={dress.id}
              addToCart={props.addToCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DressContainer;
