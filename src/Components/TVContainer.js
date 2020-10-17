import React from "react";
import TVItems from "./TVItems";

const TVContainer = (props) => {
  const { TV } = props;

  return (
    <div className="cart">
      <h5 id="deal-of-the-day">Deal of the day</h5>
      <div id="card-container">
        {TV.map((TV) => {
          return <TVItems TV={TV} key={TV.id} addToCart={props.addToCart} />;
        })}
      </div>
    </div>
  );
};

export default TVContainer;
