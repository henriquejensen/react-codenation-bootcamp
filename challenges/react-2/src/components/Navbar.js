import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import loginService from "../services/loginService";

const Navbar = ({ searchString = "", onChange }) => (
  <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark">
    <div className="navbar-brand col-1">
      <Link to="/">
        <img src={logo} className="Navbar-logo" alt="logo" />
      </Link>
    </div>

    <div className="form-group justify-content-center row col-10 my-2">
      <input
        value={searchString}
        onChange={e => onChange(e)}
        className="form-control col-9 mr-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
    </div>

    {// Criar lógica de roteamento de login/profile
    loginService.isLogged() ? (
      <Link to="/user/profile">
        <button className="btn btn-secondary">
          {loginService.getUser().username}
        </button>
      </Link>
    ) : (
      <Link to="/user/login">
        <button className="btn btn-secondary">Login</button>
      </Link>
    )}
  </nav>
);

Navbar.propTypes = {
  searchString: PropTypes.string
};

export default Navbar;
