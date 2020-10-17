import React from "react";
import CasualsContainer from "./CasualsContainer";
import * as firebase from "firebase";

import "bootstrap/dist/css/bootstrap.min.css";

class Casuals extends React.Component {
  constructor() {
    super();
    this.state = {
      casuals: [],
      loading: true,
    };
    this.db = firebase.firestore();
  }
  componentDidMount() {
    this.setState({
      loading: true,
    });

    this.db.collection("casuals").onSnapshot((snapshot) => {
      const casuals = snapshot.docs.map((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });
      this.setState({ casuals: casuals, loading: false });
    });
  }
  componentWillUnmount() {
    this.setState({
      loading: false,
    });
  }
  handleAdd = (casuals) => {
    this.db.collection("cart").add(casuals);
  };
  render() {
    const { casuals, loading } = this.state;

    return (
      <div>
        {loading && (
          <div id="spinner">
            <img
              id="at-symbol"
              src="https://image.flaticon.com/icons/svg/2658/2658131.svg"
            />
          </div>
        )}

        <CasualsContainer casuals={casuals} addToCart={this.handleAdd} />
        {/*footer*/}
   <div className="footer" style={{top:700}}>
          <div className="logo">
            <p>
              E-m
              <img
                style={{ height: 20, width: 20 }}
                id="at-symbol"
                src="https://image.flaticon.com/icons/svg/2658/2658131.svg"
              />
              rt
            </p>
          </div>
          <div className="about">
            <p>
              <b>About</b>
            </p>
            <p>
            This is a <b style={{color:"lightblue"}}>demo</b> shopping site with firebase having simple user
              authentication.
              <br />
              You can search for a number of products,can add to your cart. you
              can even increase or decrease the quantity of the product or can
              remove the product from the cart.
            </p>
          </div>
          <div className="contact-details">
            <p>
              <b>Contact Us</b>
            </p>
            <p>
              <img
                id="email"
                src="https://image.flaticon.com/icons/svg/747/747483.svg"
              />
              pmoulina76@gmail.com
              <br />
              <img
                id="phone"
                src="https://image.flaticon.com/icons/svg/747/747593.svg"
              />
              +9956667777
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Casuals;
