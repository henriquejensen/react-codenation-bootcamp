import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import RecipePage from "./RecipePage";
import { slugify } from "../helpers";
import recipes from "../sample_data/recipes.json";

class App extends Component {
  state = {
    searchString: ""
  };

  handleSearchString = event => {
    this.setState({ searchString: event.target.value });
  };

  render() {
    const MeuComponente = () => {
      return <div>About</div>;
    };

    return (
      <div className="App">
        {/* TODO: Navbar precisa receber a string da URL */}
        <Navbar
          searchString={this.state.searchString}
          onChange={this.handleSearchString}
        />

        <div className="container mt-10">
          {/* TODO: Implementar rotas  */}
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/recipe">
              <li>Recipe</li>
            </Link>
          </ul>

          <Switch>
            <Route
              exact
              path="/"
              component={() => {
                return (
                  <Home
                    recipes={recipes.results}
                    searchString={this.state.searchString}
                  />
                );
              }}
            />
            <Route exact path="/about" component={MeuComponente} />
            <Route path="/about/info" component={() => <div>{"info"}</div>} />
            <Route
              path="/recipe/:title"
              component={props => {
                console.log("RecipePage", props);
                const recipeFiltered = recipes.results.find(
                  recipe => slugify(recipe.title) === props.match.params.title
                );
                console.log("RecipePage filtered", recipeFiltered);
                return <RecipePage recipe={recipeFiltered} />;
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
