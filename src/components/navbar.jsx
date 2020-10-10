import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => (
  <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="/">
      ShoppingXpress
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item ">
          <NavLink className="nav-link" to="/home">
            🏠 Home{" "}
          </NavLink>
          <span className="sr-only">(current)</span>
        </li>
        <li className="nav-item ">
          <NavLink className="nav-link" to="/shop">
            Shop
          </NavLink>
        </li>
      </ul>

      <ul className="navbar-nav ">
        <li className="nav-item">
          <NavLink className="nav-link" to="/shoppingcart">
            🛒 Shoppingcart
            <span className="badge badge-warning m-2">{props.totallist}</span>
            <span className="badge badge-primary">${props.totalcost}</span>
          </NavLink>
        </li>
      </ul>
      <div className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
        ></input>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
