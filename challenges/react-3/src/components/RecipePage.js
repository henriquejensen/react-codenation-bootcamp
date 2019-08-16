import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import RecipeItem from "./RecipeItem";
import { getRecipesByIngredients } from "../services/recipes";

class RecipePage extends Component {
  constructor(props) {
    super(props);
    const recipe = this.props.recipe || {};
    const { thumbnail = "", title = "", ingredients = "" } = recipe;
    this.state = {
      recipe: {
        thumbnail,
        title,
        ingredients
      },
      recipes: []
    };
  }

  componentDidMount() {
    const { ingredients } = this.state.recipe;
    getRecipesByIngredients(ingredients).then(recipes =>
      this.setState({ recipes })
    );
  }

  render() {
    const { thumbnail, title, ingredients } = this.state.recipe;

    if (title === "") {
      return <Redirect to="/" />;
    }

    return (
      <div>
        <img src={thumbnail} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <strong>Ingredients: </strong>
            {ingredients}
          </p>
          <h5 className="card-title">Similar recipes</h5>
          <div className="row">
            {this.state.recipes.map(recipe => (
              <RecipeItem
                onClickRecipe={this.props.onClickRecipe}
                key={recipe.title}
                recipe={recipe}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default RecipePage;
