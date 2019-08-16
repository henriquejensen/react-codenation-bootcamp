import recipes from "../sample_data/recipes.json";
const API_PATH = "http://localhost:3030/api";

const getRecipesByIngredients = (ingredients, page = 1) => {
  // TODO implementar método
  console.log("getRecipesByIngredients", ingredients, page);

  // http://localhost:3030/api?i=lemon&p=3

  return fetch(`${API_PATH}?i=${ingredients}&p=${page}`)
    .then(response => response.json())
    .then(recipe => recipes.results);
};

const getRecipesByName = (name = "", page = 1) => {
  // TODO implementar método
  console.log("getRecipesByName", name, page);

  // http://localhost:3030/api?q=lemon&p=3
  // i == busca por ingredients
  // q == busca por titulo

  return fetch(`${API_PATH}?q=${name}&p=${page}`)
    .then(response => response.json())
    .then(recipe => recipe.results);
};

export { getRecipesByIngredients, getRecipesByName };
