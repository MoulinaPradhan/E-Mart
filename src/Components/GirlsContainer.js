import React from "react";
import GirlsItems from "./GirlsItems";

const GirlsContainer = (props) => {
  const { kidsgirls } = props;

  return (
    <div className="cart">
      <h5 id="deal-of-the-day">Deal of the day</h5>
      <div id="card-container">
        {kidsgirls.map((kidsgirls) => {
          return (
            <GirlsItems
              kidsgirls={kidsgirls}
              key={kidsgirls.id}
              addToCart={props.addToCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default GirlsContainer;
