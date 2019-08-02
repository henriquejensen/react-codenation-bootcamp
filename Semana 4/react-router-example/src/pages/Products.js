import React, { Component } from "react";
import data from "../data/index.json";

export default class Products extends Component {
  render() {
    return (
      <div className="row">
        {data.results.map(recipe => (
          <div className="col-sm-3 mt-4 card" style={{ width: "18rem" }}>
            <img src={recipe.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{recipe.title}</h5>
              <p className="card-text">{recipe.ingredients}</p>
              <a href={recipe.href} className="btn btn-primary">
                Mais
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
