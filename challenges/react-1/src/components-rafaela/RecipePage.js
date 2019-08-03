import React from "react";
import PropTypes from "prop-types";

// TODO: Você deve verificar se a receita existe

class RecipePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const recipe = this.props.recipe || {};

    if (recipe !== null) {
      return (
        <div>
          <img
            className="card-img-to p img-fluid"
            src={recipe.thumbnail}
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">{recipe.title}</h5>
            <p className="card-text">
              <strong>Ingredients: </strong> {recipe.title}
            </p>
          </div>
        </div>
      );
    } else {
      return <h1>Recipe not found</h1>;
    }
  }
}

export default RecipePage;
