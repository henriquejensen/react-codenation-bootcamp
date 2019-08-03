import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import { withRouter } from "react-router";
import RecipePage from "./RecipePage";
import { slugify } from "../helpers";
import recipes from "../sample_data/recipes.json";

class App extends Component {
  state = {
    searchString: this.props.match.params.searchString || "",
    recipe: {}
  };

  handleSearchString = event => {
    this.props.history.push(event.target.value);
    this.setState({ searchString: event.target.value });
  };

  findRecipe = recipeSlug =>
    recipes.results.filter(({ title }) => slugify(title) === recipeSlug)[0];

  render() {
    return (
      <div className="App">
        {/* TODO: Navbar precisa receber a string da URL */}
        <Navbar
          searchString={this.state.searchString}
          onChange={this.handleSearchString}
        />
        <div className="container mt-10">
          {/* TODO: Implementar rotas  */}

          <Route
            exact
            path="/"
            component={() => (
              <Home
                searchString={this.state.searchString}
                recipes={recipes.results}
              />
            )}
          />

          <Route
            path="/recipe/:id"
            component={({ match }) => {
              return <RecipePage recipe={this.findRecipe(match.params.id)} />;
            }}
          />

          <Route
            exact
            path="/:searchString"
            component={() => (
              <Home
                searchString={this.state.searchString}
                recipes={recipes.results}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
