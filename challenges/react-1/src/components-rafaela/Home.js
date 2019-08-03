import React from "react";
import PropTypes from "prop-types";
import RecipeItem from "./RecipeItem";

const Home = ({
  recipes = [],
  searchString = "",
  highlight = null,
  routeChange = null
}) => (
  <div className="row">
    {recipes.map(item => (
      <RecipeItem
        text={searchString}
        key={item.href}
        thumbnail={item.thumbnail}
        title={item.title}
        ingredients={item.ingredients}
        highlight={highlight}
        routeChange={routeChange}
      />
    ))}
  </div>
);

Home.propTypes = {
  searchString: PropTypes.string,
  recipes: PropTypes.array
};

export default Home;
