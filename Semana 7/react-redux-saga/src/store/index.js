import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import todos from "./reducer";
import rootSaga from "./saga";

const sagaMiddleWare = createSagaMiddleware();

const devToolsMiddleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();
const middleWares = applyMiddleware(sagaMiddleWare);
const store = createStore(
  combineReducers({ todos }),
  compose(
    middleWares,
    devToolsMiddleware
  )
);

sagaMiddleWare.run(rootSaga);

export default store;
