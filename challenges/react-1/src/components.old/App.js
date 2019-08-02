import React, { Component } from "react";
import { Route, Switch, matchPath } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import RecipePage from "./RecipePage";
import { slugify } from "../helpers";
import recipes from "../sample_data/recipes.json";
import { withRouter } from "react-router";

class App extends Component {
  handleChangeSearchBar = e => {
    this.props.history.push(e.target.value);
  };

  filterSingleRecipe = () => {
    const match = matchPath(this.props.location.pathname, {
      path: "/recipe/:searchString",
      exact: true
    });
    const searchString = match ? match.params.searchString : "";

    const recipe = recipes.results.filter(recipe => {
      return slugify(recipe.title) === searchString;
    });

    return recipe.shift();
  };

  searchString = () => {
    const match = matchPath(this.props.location.pathname, {
      path: "/:searchString",
      exact: true
    });
    return match ? match.params.searchString : "";
  };

  render() {
    const searchString = this.searchString();
    const singleRecipe = this.filterSingleRecipe();
    return (
      <div className="App">
        {/* TODO: Navbar precisa receber a string da URL */}
        <Navbar
          searchString={searchString}
          change={this.handleChangeSearchBar}
        />
        )}/>
        <div className="container mt-10">
          {/* TODO: Implementar rotas  */}
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Home
                  {...props}
                  recipes={recipes.results}
                  searchString={searchString}
                />
              )}
            />

            <Route
              path="/recipe/:searchString"
              render={props => <RecipePage {...props} recipe={singleRecipe} />}
            />

            <Route
              path="/:searchString"
              render={props => (
                <Home
                  {...props}
                  recipes={recipes.results}
                  searchString={searchString}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
