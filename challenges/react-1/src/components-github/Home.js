import React from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";

const doFilter = (searchString, recipeString) =>
  recipeString.toLowerCase().indexOf(searchString.toLowerCase()) >= 0;

const filterRecipes = (recipes, searchString) =>
  recipes.filter(
    ({ title, ingredients }) =>
      doFilter(searchString, title) || doFilter(searchString, ingredients)
  );

const renderRecipes = (recipes, searchString) =>
  recipes.map(recipe => (
    <RecipeItem {...recipe} key={recipe.title} searchString={searchString} />
  ));

const containerResult = (recipes, searchString) => {
  const filteredRecipes = filterRecipes(recipes, searchString);

  return filteredRecipes.length > 0 ? (
    <div className="row">{renderRecipes(filteredRecipes, searchString)}</div>
  ) : (
    <h1>No Results to show</h1>
  );
};

const Home = ({ recipes = [], searchString = "" }) => (
  <div>{containerResult(recipes, searchString)}</div>
);

Home.propTypes = {
  searchString: PropTypes.string,
  recipes: PropTypes.array
};

export default Home;
