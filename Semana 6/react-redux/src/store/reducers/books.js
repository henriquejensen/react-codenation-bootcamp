import booksApi from "../../data/index.json";

const INITIAL_STATE = {
  books: booksApi.books,
  cart: 0,
  user: null,
  booksViewd: [],
  search: ""
};

export default function books(state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        cart: state.cart + 1
      };

    case "SEARCH":
      return {
        ...state,
        search: action.value
      };

    default:
      return state;
  }
}
