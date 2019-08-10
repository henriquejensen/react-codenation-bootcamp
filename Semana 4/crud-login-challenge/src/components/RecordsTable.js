import React from "react";
import { Table, Button, ButtonToolbar } from "react-bootstrap";
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

export default function RecordsTable() {
  const products = PRODUCTS;
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => {
          return (
            <tr key={product.name}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>
                <ButtonToolbar>
                  <Link to={`/product/${index}`}>
                    <Button variant="info">Ler</Button>
                  </Link>
                  <Link to={`/product/update/${index}`}>
                    <Button variant="primary">Editar</Button>
                  </Link>
                  <Button onClick={() => alert("DELETAR")} variant="danger">
                    Deletar
                  </Button>
                </ButtonToolbar>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}
