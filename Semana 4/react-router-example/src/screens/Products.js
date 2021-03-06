import React, { Component } from "react";
import { Link } from "react-router-dom";

const API_DATA = {
  version: "1.0",
  products: [
    {
      id: 1,
      name: "Product 1",
      content: "Este é o produto 1"
    },
    {
      id: 2,
      name: "Product 2",
      content: "Este é o produto 2"
    },
    {
      id: 3,
      name: "Product 3",
      content: "Este é o produto 3"
    },
    {
      id: 4,
      name: "Product 4",
      content: "Este é o produto 4"
    }
  ]
};

export default class Products extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    this.setState({ products: API_DATA.products });
  }

  render() {
    if (this.state.products === undefined || this.state.products.length === 0) {
      return <div>Nenhum produto listado</div>;
    }

    return (
      <div>
        {this.state.products.map(product => {
          return (
            <div key={product.id}>
              <Link to={`/products/${product.id}`}>{product.name}</Link>
            </div>
          );
        })}
      </div>
    );
  }
}
