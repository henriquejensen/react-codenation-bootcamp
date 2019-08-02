import React, { Component } from "react";
import Navbar from "./Navbar";
import RecipeItem from "./RecipeItem";
import Base from "../sample_data/recipes.json";

class App extends Component {
  constructor(props) {
    super(props);
    const listagem = Base;
    const dados = listagem.results;
    this.state = {
      searchString: dados,
      value: ""
    };
  }

  handle = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const filtro = this.state.searchString.filter(banana => {
      return (
        banana.title.toLowerCase().includes(this.state.value) ||
        banana.ingredients.includes(this.state.value)
      );
    });

    return (
      <div className="App">
        <Navbar onChange={this.handle} value={this.state.value} />
        <div className="container mt-10">
          <RecipeItem filtro={filtro} />
        </div>
      </div>
    );
  }
}

export default App;
