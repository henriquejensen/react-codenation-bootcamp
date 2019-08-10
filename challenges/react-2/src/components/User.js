import React from "react";
import { Link, Redirect } from "react-router-dom";
import { logout, isLogged } from "../services/loginService";

const User = () => {
  if (isLogged()) {
    return (
      <Link to="/">
        <button className="btn" onClick={logout}>
          Logout
        </button>
      </Link>
    );
  }

  return <Redirect to="/" />;
};

export default User;
