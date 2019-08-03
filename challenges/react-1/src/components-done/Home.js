import React from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";

const Home = ({ recipes = [], searchString = "" }) => {
  const searchStringLower = searchString.toLowerCase();
  const filteredRecipes = recipes.filter(recipe => {
    return (
      recipe.title.toLowerCase().includes(searchStringLower) ||
      recipe.ingredients.toLowerCase().includes(searchStringLower)
    );
  });

  return (
    <div className="row">
      {filteredRecipes.map(recipe => (
        <RecipeItem key={recipe.title} recipe={recipe} />
      ))}
    </div>
  );
};

Home.propTypes = {
  searchString: PropTypes.string,
  recipes: PropTypes.array
};

export default Home;
