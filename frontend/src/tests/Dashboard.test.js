import React from 'react';
import renderer from 'react-test-renderer';
import Dashboard from '../react/Dashboard/Dashboard';


test('derp', () => {
  expect('True').toBeTruthy;
});

test('does this render', () => {
  const component = renderer
    .create(<Dashboard />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
