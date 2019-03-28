import React from 'react';
import renderer from 'react-test-renderer';
import Activity from '../react/Widgets/Activity/Activity';


test('derp', () => {
  expect('True').toBeTruthy;
});
test('does this render', () => {
  const component = renderer
    .create(<Activity />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
