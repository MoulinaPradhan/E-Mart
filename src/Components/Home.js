import React from "react";
import { Slides, Card, Footer } from "./";
import * as firebase from "firebase";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      front: [],
      loading: true,
    };
    this.db = firebase.firestore();
  }
  componentDidMount() {
    this.db.collection("front").onSnapshot((snapshot) => {
      const front = snapshot.docs.map((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });
      this.setState({ front: front, loading: false });
    });
  }
  handleAdd = (front) => {
    this.db.collection("cart").add(front);
    console.log("item is added xxxxx", front); //through this function
  };

  render() {
    const { front, loading } = this.state;
    return (
      <div classname="Home">
        {loading && (
          <div>
            <div id="loading"></div>
            <div id="loading-text">
              <h1 id="loading-icon">
                E-m
                <img
                  id="at-symbol"
                  src="https://image.flaticon.com/icons/svg/2658/2658131.svg"
                />
                rt
              </h1>
              <p style={{ color: "#f8f9fac9" }}>Arranging things for you...</p>
            </div>
          </div>
        )}
        <Slides />
        <Card front={front} addToCart={this.handleAdd} />
    {/*footer*/}
    <div className="footer" style={{top:1270}}>
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

export default Home;
