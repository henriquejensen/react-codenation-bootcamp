import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import RecipePage from "./RecipePage";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedRecipe: null //começa como vazio pois nenhum recipe foi selecionado
    };
  }

  handleSelectedRecipe = recipe => {
    this.setState({ selectedRecipe: recipe });
  };

  render() {
    const HomeRoute = ({ match }) => (
      <Home
        onClickRecipe={this.handleSelectedRecipe}
        searchString={match ? match.params.searchString || "" : ""}
      />
    );

    const RecipePageRoute = () => (
      <RecipePage
        onClickRecipe={this.handleSelectedRecipe}
        recipe={this.state.selectedRecipe}
      />
    );

    return (
      <div className="App">
        <Route
          exact
          path="/search/:searchString?"
          children={({ match }) => (
            <Navbar
              searchString={match ? match.params.searchString || "" : ""}
            />
          )}
        />

        <div className="container mt-10">
          <Switch>
            <Route exact path="/recipe" component={RecipePageRoute} />
            <Route path="/search/:searchString?" component={HomeRoute} />
            <Redirect to="/search" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
