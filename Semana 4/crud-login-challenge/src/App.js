import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import ReadRecords from "./routes/ReadRecords";
import CreateProduct from "./routes/CreateProduct";
import UpdateProduct from "./routes/UpdateProduct";
import ReadOneProduct from "./routes/ReadOneProduct";

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
  },
  {
    name: "bola",
    description: "para futebol de campo",
    price: 50,
    category: "SPORTS"
  }
];

class App extends React.Component {
  state = {
    products: PRODUCTS
  };

  render() {
    return (
      <Router>
        <Container>
          <Switch>
            <Route
              exact
              path="/"
              component={() => <ReadRecords products={this.state.products} />}
            />
            <Route path="/product/create" component={CreateProduct} />
            <Route path="/product/update/:id" component={UpdateProduct} />
            <Route path="/product/:id?" component={ReadOneProduct} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
