import React from "react";
import PropTypes from "prop-types";
import logo from "../logo.svg";

const Navbar = ({ searchString, change }) => (
  <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
    <div className="navbar-brand col-1">
      <img src={logo} className="Navbar-logo" alt="logo" />
    </div>

    <div className="form-group justify-content-center row col-10 my-2">
      <input
        id="searchString"
        value={searchString}
        // TODO: onChange deve atualizar a URL
        className="form-control col-9 mr-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={change}
      />
    </div>
  </nav>
);

Navbar.propTypes = {
  searchString: PropTypes.string
};

export default Navbar;
