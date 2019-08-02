import React from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";

const Home = ({ recipes = [], searchString = "" }) => {
  const filteredRecipes = recipes.filter(recipe => {
    return (
      recipe.title.toLowerCase().indexOf(searchString) !== -1 ||
      recipe.ingredients.toLowerCase().indexOf(searchString) !== -1
    );
  });

  return (
    <div className="row">
      {filteredRecipes.length > 0 ? (
        filteredRecipes.map((recipe, k) => {
          return <RecipeItem key={k} item={recipe} mark={searchString} />;
        })
      ) : (
        <h1>Recipe not found</h1>
      )}
    </div>
  );
};

Home.propTypes = {
  searchString: PropTypes.string,
  recipes: PropTypes.array
};

export default Home;
