import React from "react";
import SportsContainer from "./SportsContainer";
import * as firebase from "firebase";

import "bootstrap/dist/css/bootstrap.min.css";

class Sports extends React.Component {
  constructor() {
    super();
    this.state = {
      sports: [],
      loading: true,
    };
    this.db = firebase.firestore();
  }
  componentDidMount() {
    this.setState({
      loading: true,
    });

    this.db.collection("sports").onSnapshot((snapshot) => {
      const sports = snapshot.docs.map((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });
      this.setState({ sports: sports, loading: false });
    });
  }
  componentWillUnmount() {
    this.setState({
      loading: false,
    });
  }
  handleAdd = (sports) => {
    this.db.collection("cart").add(sports);
  };
  render() {
    const { sports, loading } = this.state;

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

        <SportsContainer sports={sports} addToCart={this.handleAdd} />
             {/*footer*/}
   <div className="footer" style={{top:500}}>
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

export default Sports;
