import React from 'react';
import renderer from 'react-test-renderer';
import MyDescription from '../react/Dashboard/MyDescription/MyDescription';

test('derp', () => {
  expect('True').toBeTruthy;
});
test('does this render', () => {
  const component = renderer
    .create(<MyDescription />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
