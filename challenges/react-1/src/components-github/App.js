import React, { Component } from "react";
import { Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import RecipePage from "./RecipePage";
import { slugify } from "../helpers";
import recipes from "../sample_data/recipes.json";

const HomeRoute = ({ match }) => (
  <Home
    recipes={recipes.results}
    searchString={match.params.searchString || ""}
  />
);

const findRecipe = recipeSlug =>
  recipes.results.filter(({ title }) => slugify(title) === recipeSlug)[0];

const RecipePageRoute = ({ match }) => (
  <RecipePage recipe={findRecipe(match.params.recipeSlug)} />
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route
          exact
          path="/:searchString?"
          children={({ match }) => (
            <Navbar searchString={match ? match.params.searchString : ""} />
          )}
        />

        <div className="container mt-10">
          <Route path="/recipe/:recipeSlug" component={RecipePageRoute} />
          <Route exact path="/:searchString?" component={HomeRoute} />
        </div>
      </div>
    );
  }
}

export default App;
