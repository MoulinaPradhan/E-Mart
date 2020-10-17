import React from "react";
import AppliancesItems from "./AppliancesItems";

const AppliancesContainer = (props) => {
  const { appliances } = props;

  return (
    <div className="cart">
      <h5 id="deal-of-the-day">Deal of the day</h5>
      <div id="card-container">
        {appliances.map((appliances) => {
          return (
            <AppliancesItems
              appliances={appliances}
              key={appliances.id}
              addToCart={props.addToCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AppliancesContainer;
