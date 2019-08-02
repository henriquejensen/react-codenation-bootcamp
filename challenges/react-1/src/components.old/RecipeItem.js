import React from "react";
import { slugify } from "../helpers";
import { Link } from "react-router-dom";

const highlight = (text, highlight) => {
  if (text !== null && text !== "" && typeof text !== "undefined") {
    let regex = new RegExp(`(${highlight})`, "gi");
    let parts = text.split(regex);
    return (
      <span>
        {parts.map((part, index) => {
          if (part.toLowerCase() === highlight) {
            return <mark key={index}>{part}</mark>;
          }
          return part;
        })}
      </span>
    );
  }
};

const RecipeItem = ({ item, mark }) =>
  item ? (
    <div className="col-sm-3 mt-4 RecipeItem">
      <Link to={`/recipe/${slugify(item.title)}`}>
        <div className="card">
          <img className="card-img-top img-fluid" src={item.thumbnail} alt="" />
          <div className="card-body">
            <h5 className="card-title">{highlight(item.title, mark)}</h5>
            <p className="card-text">
              <strong>Ingredients: </strong>
              {highlight(item.ingredients, mark)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  ) : null;

export default RecipeItem;
