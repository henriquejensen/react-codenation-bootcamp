import React, { Component } from "react";
import data from "../data/index.json";

export default class ProductDetail extends Component {
  render() {
    const id = this.props.match.params.id;
    const product = data.results[id];

    if (!id || !product) {
      return <div className="container mt-4">Nenhum produto</div>;
    }

    return (
      <div className="container mt-4">
        <div className="media">
          <img src={product.thumbnail} className="mr-3" alt="..." />
          <div className="media-body">
            <h5 className="mt-0">{product.title}</h5>
            {product.ingredients}
          </div>
        </div>
      </div>
    );
  }
}
