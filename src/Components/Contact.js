import React from "react";
import ContactItems from "./ContactItems";

const Contact = (props) => {
  const { contact } = props;

  return (
    <div className="cart">
      <div id="contact">
        {contact.map((contact) => {
          return (
            <ContactItems
              contact={contact}
              key={contact.id}
              addToCart={props.addToCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
