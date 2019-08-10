import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import ReadRecords from "./routes/ReadRecords";
import CreateProduct from "./routes/CreateProduct";
import UpdateProduct from "./routes/UpdateProduct";
import ReadOneProduct from "./routes/ReadOneProduct";

function App() {
  return (
    <Router>
      <Container>
        <Switch>
          <Route exact path="/" component={ReadRecords} />
          <Route path="/product/create" component={CreateProduct} />
          <Route path="/product/update" component={UpdateProduct} />
          <Route path="/product/:id?" component={ReadOneProduct} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
