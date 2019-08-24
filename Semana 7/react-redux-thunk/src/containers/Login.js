import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as UserThunks from "../store/user/thunks";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleEmail = email => {
    this.setState({ email });
  };

  handlePassword = password => {
    this.setState({ password });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    this.setState({ email: "", password: "" });
    this.props.login(email, password);
  };

  render() {
    const { user } = this.props;
    const { email, password } = this.state;

    if (user.isLogged) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Email</label>
            <input
              value={email}
              onChange={e => this.handleEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              value={password}
              onChange={e => this.handlePassword(e.target.value)}
            />
          </div>
          <button type="submit">Log in</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: (email, password) => dispatch(UserThunks.login(email, password))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
