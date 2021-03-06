import React from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";

const Home = ({ recipes = [], searchString = "" }) => {
  const recipesFiltered = recipes.filter(recipe => {
    return (
      recipe.title.toLowerCase().includes(searchString) ||
      recipe.ingredients.toLowerCase().includes(searchString)
    );
  });

  return (
    <div className="row">
      {recipesFiltered.map(recipe => {
        return <RecipeItem key={recipe.title} recipe={recipe} />;
      })}
    </div>
  );
};

Home.propTypes = {
  searchString: PropTypes.string,
  recipes: PropTypes.array
};

export default Home;
