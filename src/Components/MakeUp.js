import React from "react";
import MakeupCard from "./MakeupCard";
import * as firebase from "firebase";
import { Footer } from "./";

import "bootstrap/dist/css/bootstrap.min.css";

class MakeUp extends React.Component {
  constructor() {
    super();
    this.state = {
      makeup: [],
      loading: true,
    };
    this.db = firebase.firestore();
  }
  componentDidMount() {
    this.setState({
      loading: true,
    });

    this.db.collection("makeup").onSnapshot((snapshot) => {
      const makeup = snapshot.docs.map((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });
      this.setState({ makeup: makeup, loading: false });
    });
  }
  componentWillUnmount() {
    this.setState({
      loading: false,
    });
  }
  handleAdd = (makeup) => {
    this.db.collection("cart").add(makeup);
  };
  render() {
    const { makeup, loading } = this.state;

    return (
      <div>
        <h4 style={{ marginLeft: 12, marginTop: 10, fontSize: 20 }}>
          Get the best through our Premium range
        </h4>
        <div id="MakeUP" style={{ marginLeft: 12 }}>
          <img
            id="makeupad"
            src="https://image.freepik.com/free-psd/make-up-colors-with-brush-set_23-2148331236.jpg"
          />
          <img
            id="makeupad"
            src="https://image.freepik.com/free-vector/lipstick-cosmetics-make-up-with-confetti_107791-2368.jpg"
          />
          <img
            id="makeupad"
            src="https://image.freepik.com/free-photo/rubbing-big-makeup-brushes-with-color-pigment_23-2148209035.jpg"
          />
          <img
            id="makeupad"
            src="https://image.freepik.com/free-photo/top-view-decoration-with-beauty-products-pink-background_23-2148301810.jpg"
          />
        </div>
        {loading && (
          <div id="spinner" style={{ marginTop: 60 }}>
            <img
              id="at-symbol"
              src="https://image.flaticon.com/icons/svg/2658/2658131.svg"
            />
          </div>
        )}
        <MakeupCard makeup={makeup} addToCart={this.handleAdd} />
        <Footer />
      </div>
    );
  }
}

export default MakeUp;
