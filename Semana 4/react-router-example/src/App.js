import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./screens/NavBar";
import About from "./screens/About";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import Products from "./screens/Products";
import ProductDetail from "./screens/ProductDetail";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <NavBar />
        <div className="container mt-4">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:id" component={ProductDetail} />
        </div>
      </Router>
    );
  }
}
