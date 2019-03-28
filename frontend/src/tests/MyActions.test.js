import React from 'react';
import renderer from 'react-test-renderer';
import MyActions from '../react/Dashboard/MyActions/MyActions';


test('derp', () => {
  expect('True').toBeTruthy;
});
test('does this render', () => {
  const component = renderer
    .create(<MyActions />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
