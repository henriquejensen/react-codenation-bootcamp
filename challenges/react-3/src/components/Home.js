import React, { Component } from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";
import { getRecipesByName } from "../services/recipes";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      page: 1 // valor da primeira página
    };
  }

  componentDidMount() {
    this.getRecipes(this.state.page);
  }

  getRecipes = page => {
    const { searchString } = this.props;
    getRecipesByName(searchString, page).then(recipes =>
      this.setState({ recipes: recipes })
    );
  };

  handleNextPage = () => {
    const newPage = this.state.page + 1;
    this.setState({ page: newPage });
    this.getRecipes(newPage);
  };

  handlePreviousPage = () => {
    const newPage = this.state.page - 1;

    if (newPage > 0) {
      this.setState({ page: newPage });
      this.getRecipes(newPage);
    }
  };

  render() {
    const { recipes } = this.state;

    if (recipes.length === 0) {
      return <div>Nenhuma receita encontrada</div>;
    }

    return (
      <div>
        <div className="row">
          {recipes.map(recipe => (
            <RecipeItem
              key={recipe.title}
              recipe={recipe}
              onClickRecipe={this.props.onClickRecipe}
            />
          ))}
        </div>
        <div className="d-flex justify-content-center">
          <nav>
            <ul className="pagination">
              <li className="page-item">
                <button
                  onClick={this.handlePreviousPage}
                  id="prev"
                  className="page-link"
                  href="#"
                >
                  Previous
                </button>
              </li>
              <li className="page-item">
                <button
                  onClick={this.handleNextPage}
                  id="next"
                  className="page-link"
                  href="#"
                >
                  Next
                </button>
                <div>{this.state.page}</div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  searchString: PropTypes.string,
  recipes: PropTypes.array
};

export default Home;
