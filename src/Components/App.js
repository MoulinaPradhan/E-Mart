import React from "react";
import {
  Head,
  Home,
  NavLinks,
  login,
  Signup,
  MakeUp,
  Page404,
  Cart,
  MenShirt,
  MenPant,
  TV,
  Dress,
  Headphones,
  House,
  Light,
  Appliances,
  Sports,
  Casuals,
  Boys,
  Girls,
  ThankYou,
  Sorry,
} from "./";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

{
  /*const login = () => <div></div>;*/
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Head />
          <NavLinks />

          <Switch>
            <Route
              exact
              path="/"
              render={(props) => {
                return <Home {...props} />;
              }}
            />
            <Route
              exact
              path="/cart"
              render={(props) => {
                return <Cart {...props} />;
              }}
            />

            <Route path="/login" component={login} />
            <Route path="/signup" component={Signup} />
            <Route path="/house-decor" component={House} />
            <Route path="/sports" component={Sports} />
            <Route path="/thankyou" component={ThankYou} />
            <Route path="/casuals" component={Casuals} />
            <Route path="/women/makeup" component={MakeUp} />
            <Route path="/women/dress" component={Dress} />
            <Route path="/men/shirt" component={MenShirt} />
            <Route path="/men/pant" component={MenPant} />
            <Route path="/kids/boys" component={Boys} />
            <Route path="/kids/girls" component={Girls} />
            <Route path="/electronics/TV" component={TV} />
            <Route path="/electronics/light" component={Light} />
            <Route path="/electronics/headphones" component={Headphones} />
            <Route path="/electronics/appliances" component={Appliances} />
            <Route path="/unavailable" component={Sorry} />
            <Route path="/cart" component={Cart} />
            <Route component={Page404} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
