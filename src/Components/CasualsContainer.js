import React from "react";
import CasualsItems from "./CasualsItems";

const CasualsContainer = (props) => {
  const { casuals } = props;

  return (
    <div className="cart">
      <h5 id="deal-of-the-day">Deal of the day</h5>
      <div id="card-container">
        {casuals.map((casuals) => {
          return (
            <CasualsItems
              casuals={casuals}
              key={casuals.id}
              addToCart={props.addToCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CasualsContainer;
