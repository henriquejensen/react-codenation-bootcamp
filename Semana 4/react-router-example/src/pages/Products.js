import React, { Component } from "react";
import { Link } from "react-router-dom";
import data from "../data/index.json";

export default class Products extends Component {
  render() {
    return (
      <div className="row">
        {data.results.map((product, index) => (
          <div className="col-sm-3 mt-4 card" style={{ width: "18rem" }}>
            <img src={product.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.ingredients}</p>
              <Link to={`/products/${index}`} className="btn btn-primary">
                Mais
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
