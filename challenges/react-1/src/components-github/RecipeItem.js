import React from "react";
import PropTypes from "prop-types";
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
  title = "",
  ingredients = "",
  searchString = "",
  thumbnail
}) => (
  <div className="RecipeItem col-sm-3 mt-3 mb-3">
    <div className="card">
      <Link to={`/recipe/${slugify(title)}`}>
        <img className="card-img-top img-fluid" src={thumbnail} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{doHighlight(title, searchString)}</h5>
          <p className="card-text">
            <strong>Ingredients: </strong>
            {doHighlight(ingredients, searchString)}
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
