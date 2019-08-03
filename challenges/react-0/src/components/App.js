import React, { Component } from "react";
import Navbar from "./Navbar";
import RecipeItem from "./RecipeItem";
import recipes from "../sample_data/recipes.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.recipes = recipes.results;
    this.state = {
      searchString: ""
    };
  }

  onChangeSearchString = searchString => {
    this.setState({
      searchString
    });
  };

  haveRecipesToShow = recipes => recipes.length > 0;

  doFilter = string =>
    string.toLowerCase().indexOf(this.state.searchString.toLowerCase()) >= 0;

  filterRecipes = () =>
    this.recipes.filter(
      ({ title, ingredients }) =>
        this.doFilter(title) || this.doFilter(ingredients)
    );

  renderRecipes = recipes =>
    recipes.map(recipe => (
      <RecipeItem
        {...recipe}
        key={recipe.title}
        searchString={this.state.searchString}
      />
    ));

  render() {
    const filteredRecipes = this.filterRecipes();
    const recipesWrapper = () => (
      <div className="row">{this.renderRecipes(filteredRecipes)}</div>
    );
    const containerResult = this.haveRecipesToShow(filteredRecipes) ? (
      recipesWrapper()
    ) : (
      <h1>No Results to show</h1>
    );

    return (
      <div className="App">
        <Navbar
          searchString={this.state.searchString}
          onChange={this.onChangeSearchString}
        />
        <div className="container mt-10">{containerResult}</div>
      </div>
    );
  }
}

export default App;
