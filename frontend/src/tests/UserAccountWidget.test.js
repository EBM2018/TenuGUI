import React from 'react';
import renderer from 'react-test-renderer';
import UserAccountWidget from '../react/Widgets/UserAccountWidget/UserAccountWidget';

test('derp', () => {
  expect('True').toBeTruthy;
});
test('does this render', () => {
  const component = renderer
    .create(<UserAccountWidget />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
