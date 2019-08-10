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

  handleProducts = product => {
    this.setState({ products: [...this.state.products, product] });
  };

  handleUpdateProducts = (id, product) => {
    const newProducts = [...this.state.products];
    newProducts[id] = product;
    this.setState({ products: newProducts });
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
            <Route
              path="/product/create"
              component={({ history }) => (
                <CreateProduct
                  history={history}
                  onSaveProduct={this.handleProducts}
                />
              )}
            />
            <Route
              path="/product/update/:id"
              component={({ match, history }) => (
                <UpdateProduct
                  onSaveProduct={product =>
                    this.handleUpdateProducts(match.params.id, product)
                  }
                  product={this.state.products[match.params.id]}
                  history={history}
                />
              )}
            />
            <Route
              path="/product/:id?"
              component={({ match }) => (
                <ReadOneProduct
                  product={this.state.products[match.params.id]}
                />
              )}
            />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
