import React from "react";
import MenShirtContainer from "./MenShirtContainer";
import Footer from "./Footer";
import * as firebase from "firebase";

import "bootstrap/dist/css/bootstrap.min.css";

class MenShirt extends React.Component {
  constructor() {
    super();
    this.state = {
      menshirt: [],
      loading: true,
    };
    this.db = firebase.firestore();
  }
  componentDidMount() {
    this.setState({
      loading: true,
    });

    this.db.collection("menshirt").onSnapshot((snapshot) => {
      const menshirt = snapshot.docs.map((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });
      this.setState({ menshirt: menshirt, loading: false });
    });
  }
  componentWillUnmount() {
    this.setState({
      loading: false,
    });
  }
  handleAdd = (menshirt) => {
    this.db.collection("cart").add(menshirt);
  };
  render() {
    const { menshirt, loading } = this.state;

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

        <MenShirtContainer menshirt={menshirt} addToCart={this.handleAdd} />
        <Footer/>
      </div>
    );
  }
}

export default MenShirt;
