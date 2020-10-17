import React from "react";
import MenShirtItems from "./MenShirtItems";

const MenShirtContainer = (props) => {
  const { menshirt } = props;

  return (
    <div className="cart">
      <h5 id="deal-of-the-day">Deal of the day</h5>
      <div id="card-container">
        {menshirt.map((menshirt) => {
          return (
            <MenShirtItems
              menshirt={menshirt}
              key={menshirt.id}
              addToCart={props.addToCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenShirtContainer;
