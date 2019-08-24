/* eslint-disable */
/* IE */
import "core-js/es6/map"; // for IE old browsers
import "core-js/es6/set"; // for IE old browsers
import "raf/polyfill"; // for IE old browsers
import "babel-polyfill"; // for IE old browsers

/* Modules */
import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./services/registerServiceWorker";

// redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga"; // SAGA
import rootReducers from "./redux/rootReducers";
import rootSagas from "./redux/rootSagas";

// Router
import MyRouter from "./router/router";
import { HashRouter } from "react-router-dom";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
  rootReducers,
  {},
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

// run the saga
sagaMiddleware.run(rootSagas);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <MyRouter />
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
