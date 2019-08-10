import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { register, login, isLogged } from "../services/loginService";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsername = event => {
    this.setState({ username: event.target.value });
  };

  handlePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (isLogged()) {
      this.props.history.push("/");
    }
  };

  handleRegister = () => {
    try {
      register({
        username: this.state.username,
        password: this.state.password
      });
      this.handleLogin();
    } catch (e) {
      alert(e);
    }
  };

  handleLogin = () => {
    try {
      login({
        username: this.state.username,
        password: this.state.password
      });
    } catch (e) {
      alert(e);
    }
  };

  render = () => (
    <form onSubmit={event => this.handleSubmit(event)} className="form-signin">
      <div className="text-center mb-4">
        <h1 className="h3 mb-3 font-weight-normal">Login / Register</h1>
      </div>

      <div className="form-label-group">
        <label htmlFor="inputEmail">Username</label>
        <input
          name="username"
          onChange={event => this.handleUsername(event)}
          value={this.state.username}
          className="form-control"
          placeholder="Username"
          required
        />
      </div>

      <div className="form-label-group mt-2">
        <label htmlFor="inputPassword">Password</label>
        <input
          name="password"
          onChange={event => this.handlePassword(event)}
          value={this.state.password}
          type="password"
          className="form-control"
          placeholder="Password"
          required
        />
      </div>

      <div className="mt-5">
        <button
          className="login btn btn-lg btn-primary btn-block"
          type="submit"
          onClick={() => this.handleLogin()}
        >
          Login
        </button>
        <button
          className="register btn btn-lg btn-secondary btn-block"
          type="submit"
          onClick={() => this.handleRegister()}
        >
          Register
        </button>
      </div>
    </form>
  );
}

export default withRouter(Login);
