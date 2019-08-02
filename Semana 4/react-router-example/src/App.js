import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./pages/NavBar";
import Contact from "./pages/Contact";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <div>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}
