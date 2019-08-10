import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";

const CATEGORIES = {
  PERSONAL: "Personal",
  SPORTS: "Sports",
  FASHION: "Fashion",
  MOTORS: "Motors"
};

export default class UpdateProduct extends React.Component {
  state = {
    name: "",
    price: 0,
    description: "",
    category: ""
  };

  componentDidMount() {
    this.setState({ ...this.props.product });
  }

  handleName = event => {
    this.setState({ name: event.target.value });
  };

  handlePrice = event => {
    this.setState({ price: event.target.value });
  };

  handleDescription = event => {
    this.setState({ description: event.target.value });
  };

  handleCategory = event => {
    this.setState({ category: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSaveProduct(this.state);
    this.props.history.push("/");
  };

  render() {
    const { name, price, description, category } = this.state;
    return (
      <>
        <Row>
          <h1>Update Product</h1>
        </Row>
        <Link to="/">
          <Row>
            <Button>Read Products</Button>
          </Row>
        </Link>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row} controlId="formBasicName">
            <Form.Label column lg="2">
              Name
            </Form.Label>
            <Col lg="8">
              <Form.Control
                onChange={this.handleName}
                value={name}
                type="text"
                placeholder="Product name"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formBasicPrice">
            <Form.Label column lg="2">
              Price
            </Form.Label>
            <Col lg="8">
              <Form.Control
                onChange={this.handlePrice}
                value={price}
                type="number"
                placeholder="29.99"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formBasicDescription">
            <Form.Label column lg="2">
              Description
            </Form.Label>
            <Col lg="8">
              <Form.Control
                onChange={this.handleDescription}
                value={description}
                type="text"
                placeholder="Product description"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formBasicCategory">
            <Form.Label column lg="2">
              Category
            </Form.Label>
            <Col lg="8">
              <Form.Control
                value={category}
                as="select"
                onChange={this.handleCategory}
              >
                {Object.keys(CATEGORIES).map(key => {
                  return (
                    <option key={key} value={key}>
                      {CATEGORIES[key]}
                    </option>
                  );
                })}
              </Form.Control>
            </Col>
          </Form.Group>
          <Button type="submit">Salvar</Button>
        </Form>
      </>
    );
  }
}
