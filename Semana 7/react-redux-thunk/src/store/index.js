import { createStore, applyMiddleware, compose } from "redux";

import rooReducer from "./reducers";

const devToolsMiddleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();
const middleWares = applyMiddleware();
const store = createStore(
  rooReducer,
  compose(
    middleWares,
    devToolsMiddleware
  )
);

export default store;
