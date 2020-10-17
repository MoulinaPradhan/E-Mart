import React from "react";
import { NavDropdown, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
class NavLinks extends React.Component {
  render() {
    return (
      <div>
        <Nav
          id="nav-container"
          variant="pills"
          activeKey="1"
          style={{ marginLeft: 61 }}
        >
          {/*Electronics*/}
          <NavDropdown id="nav-title" title="Electronics" id="nav-dropdown">
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4" style={{ fontSize: 13 }}>
              <Link
                style={{ fontSize: 13, color: "black", textDecoration: "none" }}
                to="/electronics/light"
                onClick={() => {
                  document
                    .getElementById("cart-div")
                    .classList.remove("active-cart");
                }}
              >
                Lights
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.1" style={{ fontSize: 12 }}>
              LED lights
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2" style={{ fontSize: 12 }}>
              House Decor lights
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4" style={{ fontSize: 13 }}>
              <Link
                style={{ fontSize: 13, color: "black", textDecoration: "none" }}
                to="/electronics/headphones"
                onClick={() => {
                  document
                    .getElementById("cart-div")
                    .classList.remove("active-cart");
                }}
              >
                Headphones
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.1" style={{ fontSize: 12 }}>
              Wireless
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2" style={{ fontSize: 12 }}>
              Mi
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2" style={{ fontSize: 12 }}>
              JBL
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2" style={{ fontSize: 12 }}>
              BOAT
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2" style={{ fontSize: 12 }}>
              JAYS
            </NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>
          {/*TV and appliances*/}
          <NavDropdown
            id="nav-title"
            title="TV and appliances"
            id="nav-dropdown"
          >
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4" style={{ fontSize: 13 }}>
              <Link
                style={{ fontSize: 13, color: "black", textDecoration: "none" }}
                to="/electronics/TV"
                onClick={() => {
                  document
                    .getElementById("cart-div")
                    .classList.remove("active-cart");
                }}
              >
                TV
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.1" style={{ fontSize: 12 }}>
              LED Smart TV
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2" style={{ fontSize: 12 }}>
              HD Smart TV
            </NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4" style={{ fontSize: 13 }}>
              <Link
                style={{ fontSize: 13, color: "black", textDecoration: "none" }}
                to="/electronics/appliances"
                onClick={() => {
                  document
                    .getElementById("cart-div")
                    .classList.remove("active-cart");
                }}
              >
                Appliances
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.1" style={{ fontSize: 12 }}>
              Iron
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2" style={{ fontSize: 12 }}>
              Air Cooler
            </NavDropdown.Item>
          </NavDropdown>
          {/*Home Decor*/}
          <NavDropdown title="House Decor" id="nav-dropdown">
            <NavDropdown.Divider />
            <NavDropdown.Item
              eventKey="4.4"
              style={{ fontSize: 13, color: "black" }}
            >
              <Link
                style={{ fontSize: 13, color: "black", textDecoration: "none" }}
                to="/house-decor"
                onClick={() => {
                  document
                    .getElementById("cart-div")
                    .classList.remove("active-cart");
                }}
              >
                Home decors
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.1" style={{ fontSize: 12 }}>
              Ami collections
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2" style={{ fontSize: 12 }}>
              WOODKARTIA
            </NavDropdown.Item>
          </NavDropdown>
          {/*kids*/}
          <NavDropdown title="Kids" id="nav-dropdown">
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4" style={{ fontSize: 13 }}>
              <Link
                style={{ fontSize: 13, color: "black", textDecoration: "none" }}
                to="/kids/boys"
                onClick={() => {
                  document
                    .getElementById("cart-div")
                    .classList.remove("active-cart");
                }}
              >
                Boys
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.1" style={{ fontSize: 12 }}>
              Traditional Wear
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2" style={{ fontSize: 12 }}>
              Summer clothes
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4" style={{ fontSize: 13 }}>
              <Link
                style={{ fontSize: 13, color: "black", textDecoration: "none" }}
                to="/kids/girls"
                onClick={() => {
                  document
                    .getElementById("cart-div")
                    .classList.remove("active-cart");
                }}
              >
                Girls
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.1" style={{ fontSize: 12 }}>
              Traditional Wear
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2" style={{ fontSize: 12 }}>
              Summer Cotton Froks
            </NavDropdown.Item>
          </NavDropdown>
          {/*men*/}
          <NavDropdown title="men" id="nav-dropdown">
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4" style={{ fontSize: 13 }}>
              <Link
                style={{ fontSize: 13, color: "black", textDecoration: "none" }}
                to="/men/shirt"
                onClick={() => {
                  document
                    .getElementById("cart-div")
                    .classList.remove("active-cart");
                }}
              >
                Shirt
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item style={{ fontSize: 12 }} eventKey="4.1">
              Polo shirt
            </NavDropdown.Item>
            <NavDropdown.Item style={{ fontSize: 12 }} eventKey="4.2">
              Gym wear
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3" style={{ fontSize: 12 }}>
              Slim Fit
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4" style={{ fontSize: 13 }}>
              <Link
                style={{ fontSize: 13, color: "black", textDecoration: "none" }}
                to="/men/pant"
                onClick={() => {
                  document
                    .getElementById("cart-div")
                    .classList.remove("active-cart");
                }}
              >
                Pant
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.1" style={{ fontSize: 12 }}>
              Demin
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2" style={{ fontSize: 12 }}>
              Gym wear
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3" style={{ fontSize: 12 }}>
              Casuals
            </NavDropdown.Item>
          </NavDropdown>
          {/*women */}
          <NavDropdown title="women" id="nav-dropdown">
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4" style={{ fontSize: 13 }}>
              <Link
                style={{ fontSize: 13, color: "black", textDecoration: "none" }}
                to="/women/dress"
                onClick={() => {
                  document
                    .getElementById("cart-div")
                    .classList.remove("active-cart");
                }}
              >
                Designer Dresses
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.1" style={{ fontSize: 12 }}>
              Kurtis
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2" style={{ fontSize: 12 }}>
              Denim
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2" style={{ fontSize: 12 }}>
              Salwar
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2" style={{ fontSize: 12 }}>
              tube tops
            </NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4" style={{ fontSize: 13 }}>
              <Link
                style={{ fontSize: 13, color: "black", textDecoration: "none" }}
                to="/women/makeup"
                onClick={() => {
                  document
                    .getElementById("cart-div")
                    .classList.remove("active-cart");
                }}
              >
                MakeUp
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4" style={{ fontSize: 12 }}>
              Lipstics
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.1" style={{ fontSize: 12 }}>
              Compacts
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2" style={{ fontSize: 12 }}>
              Creams and lotion
            </NavDropdown.Item>
          </NavDropdown>
          {/*footware*/}
          <NavDropdown id="nav-title" title="Footware" id="nav-dropdown">
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4" style={{ fontSize: 13 }}>
              <Link
                style={{ fontSize: 13, color: "black", textDecoration: "none" }}
                to="/sports"
                onClick={() => {
                  document
                    .getElementById("cart-div")
                    .classList.remove("active-cart");
                }}
              >
                Sports Shoe
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.1" style={{ fontSize: 12 }}>
              Walking Shoes
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2" style={{ fontSize: 12 }}>
              Nke Best collections
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey="4.4" style={{ fontSize: 13 }}>
              <Link
                style={{ fontSize: 13, color: "black", textDecoration: "none" }}
                to="/casuals"
                onClick={() => {
                  document
                    .getElementById("cart-div")
                    .classList.remove("active-cart");
                }}
              >
                Daily Casuals
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4" style={{ fontSize: 12 }}>
              Semi Heels
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.1" style={{ fontSize: 12 }}>
              Office Shoes
            </NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2" style={{ fontSize: 12 }}>
              Sneakers
            </NavDropdown.Item>
          </NavDropdown>
          {/*Beverages*/}

          {/**/}
          <Nav.Item>
            <Nav.Link eventKey="1" href="#/home">
              offers
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="1" href="#/home">
              Recharge
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default NavLinks;
