import React from "react";
import MakeupItems from "./MakeupItems";

const MakeUpCard = (props) => {
  const { makeup } = props;

  return (
    <div className="cart">
      <h5 id="deal-of-the-day" style={{marginTop:30}}>Best Sellers</h5>
      <div id="card-container">
        {makeup.map((makeup) => {
          return (
            <MakeupItems
              makeup={makeup}
              key={makeup.id}
              addToCart={props.addToCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MakeUpCard;
