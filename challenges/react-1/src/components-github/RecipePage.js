import React from "react";

const renderRecipe = ({ ingredients, title, thumbnail }) => (
  <div>
    <img src={thumbnail} alt={title} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">
        <strong>Ingredients: </strong>
        {ingredients}
      </p>
    </div>
  </div>
);

const contentRender = recipe =>
  recipe ? renderRecipe(recipe) : <h1>Recipe not found</h1>;
const RecipePage = ({ recipe }) => <div>{contentRender(recipe)}</div>;

export default RecipePage;
