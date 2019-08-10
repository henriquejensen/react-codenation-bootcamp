import React from "react";
import { Link } from "react-router-dom";
import { slugify } from "../helpers";

const doHighlight = (string, toHighlight) => {
  const startIndex = string.toLowerCase().indexOf(toHighlight.toLowerCase());

  if (startIndex < 0) {
    return string;
  }

  return (
    <span>
      {string.substring(0, startIndex)}
      <mark>
        {string.substring(startIndex, startIndex + toHighlight.length)}
      </mark>
      {string.substring(startIndex + toHighlight.length)}
    </span>
  );
};

const RecipeItem = ({
  recipe: { title = "", ingredients = "", thumbnail },
  searchString = ""
}) => (
  <div className="col-sm-3 mt-4">
    <Link to={`/recipe/${slugify(title)}`}>
      <div className="card">
        <img className="card-img-top img-fluid" src={thumbnail} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{doHighlight(title, searchString)}</h5>
          <p className="card-text">
            <strong>Ingredients: </strong>
            {doHighlight(ingredients, searchString)}
          </p>
        </div>
      </div>
    </Link>
  </div>
);

export default RecipeItem;
