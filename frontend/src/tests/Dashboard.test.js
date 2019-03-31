import React from 'react';
import renderer from 'react-test-renderer';
import { createMemoryHistory } from 'history';
import Dashboard from '../react/Dashboard/Dashboard';


test('does this render', () => {
  const historyMock = createMemoryHistory('/dashboard');
  const component = renderer
    .create(<Dashboard changeInfo={() => {}} history={historyMock} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
