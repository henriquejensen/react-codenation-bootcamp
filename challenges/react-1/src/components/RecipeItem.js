import React from "react";
import { Link } from "react-router-dom";
import { slugify } from "../helpers";

const RecipeItem = ({ recipe = {} }) => {
  return (
    <div className="col-sm-3 mt-4">
      <Link to={`/recipe/${slugify(recipe.title || '')}`}>
        <div className="card">
          <img
            className="card-img-top img-fluid"
            src={recipe.thumbnail}
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{recipe.title}</h5>
            <p className="card-text">
              <strong>Ingredients: </strong>
              {recipe.ingredients}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default RecipeItem;
