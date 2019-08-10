import React from "react";
import { Table, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    name: "playstation",
    description: "melhor videogame",
    price: 1000,
    category: "PERSONAL"
  },
  {
    name: "camaro",
    description: "melhor carro",
    price: 100000,
    category: "MOTORS"
  }
];

export default function ReadOneProduct({ match }) {
  const id = match.params.id;
  const product = PRODUCTS[id];
  return (
    <Row>
      <Col md={12}>
        <h1>Read One Product</h1>
      </Col>
      <Col md={12}>
        <Link to="/">
          <Button variant="primary" size="sm">
            Read Products
          </Button>
        </Link>
      </Col>
      <Col md={12}>
        <Table striped bordered hover>
          <tbody>
            <tr key={product.name}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}
