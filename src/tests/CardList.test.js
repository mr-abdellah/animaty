import React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../Redux/Store';
import CardList from '../components/CardList';

it(' CardList Test "renders correctly"', () => {
  const tree = renderer
    .create(
      <Provider store={store}>
        <CardList />
      </Provider>,
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
