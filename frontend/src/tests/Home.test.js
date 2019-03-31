
import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../react/Home/Home';
import { createMemoryHistory } from 'history';

test('Home renders as expected', () => {
  const historyMock = createMemoryHistory('/dashboard');
  const component = renderer
    .create(<Home history={historyMock} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
