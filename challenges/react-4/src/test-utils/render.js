import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render as rtlRender } from 'react-testing-library';
// styled-components
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
// react-router
import { Router } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createMemoryHistory } from 'history';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'; // SAGA
import theme from '../styles/theme';
import rootReducers from '../redux/rootReducers';

// components
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

function render(
  ui,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }), ...renderOptions } = {}
) {
  const store = createStore(rootReducers, {}, composeEnhancers(applyMiddleware(sagaMiddleware)));

  const rendered = rtlRender(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router history={history}>{ui}</Router>
      </ThemeProvider>
    </Provider>,
    renderOptions
  );

  return {
    ...rendered,
    rerender: (ui, options) => render(ui, { container: rendered.container, ...options }),
    history
  };
}

export default render;
