import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RecipeItem = ({ recipe = {}, onClickRecipe }) => (
  <div className="RecipeItem col-sm-3 mt-3 mb-3">
    <div className="card">
      <Link to={`/recipe`} onClick={() => onClickRecipe(recipe)}>
        <img
          className="card-img-top img-fluid"
          src={recipe.thumbnail || "https://via.placeholder.com/350x260"}
          alt={recipe.title}
        />
        <div className="card-body">
          <h5 className="card-title">{recipe.title}</h5>
          <p className="card-text">
            <strong>Ingredients: </strong>
            {recipe.ingredients}
          </p>
        </div>
      </Link>
    </div>
  </div>
);

RecipeItem.propTypes = {
  title: PropTypes.string,
  ingredients: PropTypes.string,
  thumbnail: PropTypes.string,
  searchString: PropTypes.string
};

export default RecipeItem;
