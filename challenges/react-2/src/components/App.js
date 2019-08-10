import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import RecipePage from "./RecipePage";
import Login from "./Login";
import User from "./User";
import { slugify } from "../helpers";
import recipes from "../sample_data/recipes.json";

const HomeRoute = ({ match }) => (
  <Home recipes={recipes.results} searchString={match.params.searchString} />
);
const LoginRoute = () => <Login />;
const ProfileRoute = () => <User />;
const RecipePageRoute = ({ match }) => {
  const recipe = recipes.results.find(
    recipe => slugify(recipe.title) === match.params.title
  );
  return <RecipePage recipe={recipe} />;
};

class App extends Component {
  state = {
    searchString: this.props.location.pathname.replace("/", "")
  };

  handleSearchString = event => {
    this.props.history.push(event.target.value);
    this.setState({ searchString: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <Navbar
          onChange={this.handleSearchString}
          searchString={this.state.searchString}
        />

        <div className="container mt-10">
          <Route path="/recipe/:title" component={RecipePageRoute} />
          <Route path="/user/login" component={LoginRoute} />
          <Route path="/user/profile" component={ProfileRoute} />
          <Route exact path="/:searchString?" component={HomeRoute} />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
