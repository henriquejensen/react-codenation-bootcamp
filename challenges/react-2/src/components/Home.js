import React from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";

const Home = ({ recipes = [], searchString = "" }) => {
  const recipesFiltered = recipes.filter(recipe => {
    const searchStringLowerCase = searchString.toLowerCase();
    return (
      recipe.title.toLowerCase().includes(searchStringLowerCase) ||
      recipe.ingredients.toLowerCase().includes(searchStringLowerCase)
    );
  });

  if (recipesFiltered.length === 0) {
    return <div className="row">Nenhuma receita encontrada</div>;
  }

  return (
    <div className="row">
      {recipesFiltered.map(recipe => (
        <RecipeItem
          key={recipe.title}
          searchString={searchString}
          recipe={recipe}
        />
      ))}
    </div>
  );
};

Home.propTypes = {
  searchString: PropTypes.string,
  recipes: PropTypes.array
};

export default Home;
