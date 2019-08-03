import React from "react";

const RecipeItem = props => {
  const filtro = props.filtro || [];
  let result;

  if (filtro.length === 0) {
    result = <h2>No results to show</h2>;
  } else {
    result = filtro.map((dados, i) => (
      <div key={i + 1} className="col-sm-3 mt-4">
        <div className="card">
          <img
            className="card-img-top img-fluid"
            src={dados.thumbnail}
            alt="https://via.placeholder.com/350x300"
          />
          <div className="card-body">
            <h5 className="card-title" key={i + 2}>
              {dados.title}
            </h5>
            <p className="card-text">
              <strong>Ingredients: </strong>
              <span key={i + 3}>{dados.ingredients}</span>
            </p>
          </div>
        </div>
      </div>
    ));
  }
  return <div className="row justify-content-center">{result}</div>;
};

export default RecipeItem;
