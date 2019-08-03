import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./pages/NavBar";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:id" component={ProductDetail} />
        </Switch>
      </BrowserRouter>
    );
  }
}
