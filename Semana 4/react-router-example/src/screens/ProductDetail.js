import React, { Component } from "react";

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

export default class ProductDetail extends Component {
  state = {
    product: {}
  };

  componentDidMount() {
    const productFiltered = API_DATA.products.find(
      product => product.id.toString() === this.props.match.params.id
    );
    this.setState({ product: productFiltered });
  }

  render() {
    return (
      <div>
        <p>Product Detail</p>
        <p>{this.state.product.name}</p>
        <p>{this.state.product.content}</p>
      </div>
    );
  }
}
