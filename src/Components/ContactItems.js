import React from "react";

const ContactItems = (props) => {
  const { name, address } = props.contact;
  const { contact, addToCart } = props;
  return (
    <div>
      <div className="contact">
        <div style={{ fontSize: 15 }}>
          <b style={{ fontSize: 15, marginRight: 10 }}>Name of the Customer:</b>
          {name}
        </div>
        <div style={{ fontSize: 15 }}>
          <b style={{ fontSize: 15, marginRight: 10 }}>Address(delivery):</b>
          {address}
        </div>
        <div style={{ fontSize: 15 }}>
          <b style={{ fontSize: 15, marginRight: 10 }}>Mode of Payment:</b>Cash
          on Delivery
        </div>
        <span id="note">(Now we are only accepting payments through cash)</span>
      </div>
    </div>
  );
};

export default ContactItems;
