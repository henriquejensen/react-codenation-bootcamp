import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./pages/NavBar";
import Contact from "./pages/Contact";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Home />
        <About />
        <Contact />
      </div>
    );
  }
}
