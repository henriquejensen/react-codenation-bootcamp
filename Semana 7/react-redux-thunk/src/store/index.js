import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rooReducer from "./reducers";

const devToolsMiddleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();
const middleWares = applyMiddleware(thunk);
const store = createStore(
  rooReducer,
  compose(
    middleWares,
    devToolsMiddleware
  )
);

export default store;
