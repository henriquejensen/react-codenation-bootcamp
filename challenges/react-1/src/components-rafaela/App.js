import React, { Component } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import Navbar from "./Navbar";
import Home from "./Home";
import RecipePage from "./RecipePage";
import recipes from "../sample_data/recipes.json";

class App extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.history.push(event.target.value);

    this.render();
  }

  highlightText(search, text) {
    if (search === "") return <span>{text}</span>;
    else {
      const regex = new RegExp(`(${search})`, "gi");
      const parts = text.split(regex);

      return (
        <span>
          {parts
            .filter(part => part)
            .map((part, i) =>
              regex.test(part) ? (
                <mark key={i}>{part}</mark>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
        </span>
      );
    }
  }

  filterRecipe(searchString) {
    const filterTitle = recipes.results.filter(recipe => {
      return (
        recipe.title.toLowerCase().indexOf(searchString.toLocaleLowerCase()) !==
        -1
      );
    });

    const filterIngredients = recipes.results.filter(recipe => {
      return (
        recipe.ingredients
          .toLowerCase()
          .indexOf(searchString.toLocaleLowerCase()) !== -1
      );
    });

    let filterRecipe = [...filterTitle, ...filterIngredients];

    return (filterRecipe = filterRecipe.filter(
      (recipe, i) => filterRecipe.indexOf(recipe) === i
    ));
  }

  render() {
    const { match, location, history } = this.props;
    let filterRecipe = this.filterRecipe(location.pathname.substring(1));

    return (
      <div className="App">
        {/* TODO: Navbar precisa receber a string da URL */}
        <Navbar
          onChange={this.onChange}
          searchString={location.pathname.substring(1)}
        />
        )}/>
        <div className="container mt-10">
          {/* TODO: Implementar rotas  */}
          <Route
            path="/"
            render={routeProps => (
              <Home
                {...routeProps}
                recipes={filterRecipe}
                searchString={location.pathname.substring(1)}
                highlight={this.highlightText}
              />
            )}
          />
          <Route
            path={`/recipe`}
            render={routeProps => (
              <RecipePage
                {...routeProps}
                recipe={
                  this.props.location.recipe === undefined
                    ? null
                    : this.props.location.recipe
                }
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(App);
