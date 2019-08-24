import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { cleanup } from 'react-testing-library';
import { createHistory, createMemorySource, LocationProvider } from '@reach/router';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'jest-dom/extend-expect';
import MyRouter from '../router';
import render from '../../test-utils/render';

afterEach(cleanup);

function renderWithRouter(
  ui,
  { route = '/', history = createHistory(createMemorySource(route)) } = {}
) {
  return {
    ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
    history
  };
}
test('full app rendering/navigating', async () => {
  const { getByPlaceholderText } = renderWithRouter(<MyRouter />);
  expect(getByPlaceholderText('Buscar Personagens')).toBeInTheDocument();
});
