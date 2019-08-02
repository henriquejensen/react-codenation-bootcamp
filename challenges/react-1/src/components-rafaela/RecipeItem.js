import React from "react";
import { Link, Route } from "react-router-dom";
import { slugify } from "../helpers";

const RecipeItem = ({
  title = "",
  thumbnail = "",
  text = "",
  ingredients = "",
  highlight = () => {}
}) => (
  <div className="col-sm-3 mt-4">
    <Link
      to={{
        pathname: `/recipe/${slugify(title)}`
      }}
    >
      <div className="card">
        <img className="card-img-top img-fluid" src={thumbnail} alt="" />
        <div className="card-body">
          <h5 className="card-title"> {highlight(text, title)} </h5>
          <p className="card-text">
            <strong>Ingredients</strong> {highlight(text, ingredients)}
          </p>
        </div>
      </div>
    </Link>
  </div>
);

export default RecipeItem;
