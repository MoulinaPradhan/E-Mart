import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      "men pant",
      "pant",
      "lipstick",
      "eye liner",
      "nail polish",
      "designer dress",
      "women dress",
      "kids girls",
      "kids boys",
      "sport shoes",
      "frocks",
      "saree",
      "salwar",
      "TV",
      "daily casuals",
      "headphones",
      "JBL",
      "Mi",
      "Mi headphones",
      "house decor",
      "WILDKART",
      "casual shoes",
      "shoes",
      "kids",
      "light",
      "cycle-light",
      "women makeup",
      "makeup",
      "men shirt",
      "shirt",
      "sport shoes",
      "house appliances",
      "electronic appliances",
      "cooler",
      "vaccum cleaner",
      "mixer grinder",
      "appliances",
    ];
    this.state = {
      suggestions: [],
      text: "",
      path: "",
      button: true,
    };
  }

  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = this.items.sort().filter((v) => regex.test(v));
    }
    this.setState(() => ({ suggestions, text: value }));
    console.log("text", value);
  };
  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: [],
    }));
  }

  renderSuggestions() {
    const { suggestions } = this.state;
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul id="suggestions" type="none">
        {suggestions.map((item) => (
          <li onClick={() => this.suggestionSelected(item)}>{item}</li>
        ))}
      </ul>
    );
  }

  render() {
    const { text } = this.state;

    let btn;
    if (text === "men shirt" || text === "shirt") {
      btn = (
        <Link to="/men/shirt">
          <button
            id="search-btn"
            onClick={() => {
              document
                .getElementById("cart-div")
                .classList.remove("active-cart");
            }}
          >
            search
          </button>
        </Link>
      );
    } else if (
      text === "women makeup" ||
      text === "makeup" ||
      text === "eye liner" ||
      text === "nail color" ||
      text === "lipstick"
    ) {
      btn = (
        <Link to="/women/makeup">
          <button
            id="search-btn"
            onClick={() => {
              document
                .getElementById("cart-div")
                .classList.remove("active-cart");
            }}
          >
            search
          </button>
        </Link>
      );
    } else if (text === "men pant" || text === "pant") {
      btn = (
        <Link to="/men/pant">
          <button
            id="search-btn"
            onClick={() => {
              document
                .getElementById("cart-div")
                .classList.remove("active-cart");
            }}
          >
            search
          </button>
        </Link>
      );
    } else if (text === "house decor" || text === "WILDKART") {
      btn = (
        <Link to="/house-decor">
          <button
            id="search-btn"
            onClick={() => {
              document
                .getElementById("cart-div")
                .classList.remove("active-cart");
            }}
          >
            search
          </button>
        </Link>
      );
    } else if (text === "frocks" || text === "kids girls") {
      btn = (
        <Link to="/kids/girls">
          <button
            id="search-btn"
            onClick={() => {
              document
                .getElementById("cart-div")
                .classList.remove("active-cart");
            }}
          >
            search
          </button>
        </Link>
      );
    } else if (text === "kids boys" || text === "boys") {
      btn = (
        <Link to="/kids/boys">
          <button
            id="search-btn"
            onClick={() => {
              document
                .getElementById("cart-div")
                .classList.remove("active-cart");
            }}
          >
            search
          </button>
        </Link>
      );
    } else if (
      text === "designer dress" ||
      text === "women dress" ||
      text === "saree" ||
      text === "salwar"
    ) {
      btn = (
        <Link to="/women/dress">
          <button
            id="search-btn"
            onClick={() => {
              document
                .getElementById("cart-div")
                .classList.remove("active-cart");
            }}
          >
            search
          </button>
        </Link>
      );
    } else if (text === "casual shoes" || text === "daily casuals") {
      btn = (
        <Link to="/casuals">
          <button
            id="search-btn"
            onClick={() => {
              document
                .getElementById("cart-div")
                .classList.remove("active-cart");
            }}
          >
            search
          </button>
        </Link>
      );
    } else if (text === "sport shoes" || text === "shoes") {
      btn = (
        <Link to="/sports">
          <button
            id="search-btn"
            onClick={() => {
              document
                .getElementById("cart-div")
                .classList.remove("active-cart");
            }}
          >
            search
          </button>
        </Link>
      );
    } else if (
      text === "headphones" ||
      text === "JBL" ||
      text === "Mi" ||
      text === "Mi headphones"
    ) {
      btn = (
        <Link to="/electronics/headphones">
          <button
            id="search-btn"
            onClick={() => {
              document
                .getElementById("cart-div")
                .classList.remove("active-cart");
            }}
          >
            search
          </button>
        </Link>
      );
    } else if (text === "light" || text === "cycle-light") {
      btn = (
        <Link to="/electronics/light">
          <button
            id="search-btn"
            onClick={() => {
              document
                .getElementById("cart-div")
                .classList.remove("active-cart");
            }}
          >
            search
          </button>
        </Link>
      );
    } else if (text === "house appliances" || text === "cooler" || text === "electronic appliances" || text === "vaccum cleaner"  || text === "mixer grinder" || text === "appliances") {
      btn = (  <Link to="/electronics/appliances">
        <button
          id="search-btn"
          onClick={() => {
            document
              .getElementById("cart-div")
              .classList.remove("active-cart");
          }} 
        >
          search
        </button>
           </Link>
      );
    } else if (text === "") {
      btn = (
        <button
          id="search-btn"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          search
        </button>
      );
    } else {
      btn = (
        <Link to="/unavailable">
          <button
            id="search-btn"
            onClick={() => {
              document
                .getElementById("cart-div")
                .classList.remove("active-cart");
            }}
          >
            search
          </button>
        </Link>
      );
    }

    return (
      <div>
        <form id="search-form">
          <input
            autoComplete="off"
            id="search-box"
            value={text}
            onChange={this.onTextChanged}
            type="text"
          />
          <div id="suggestions">{this.renderSuggestions()}</div>
          <div id="serch-btn">{btn}</div>
        </form>
      </div>
    );
  }
}

export default Search;
