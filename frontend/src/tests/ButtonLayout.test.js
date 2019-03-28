import renderer from 'react-test-renderer';
import React from 'react';
import ButtonLayout from '../react/Fishtank/ButtonLayout/ButtonLayout';

test('derp', () => {
  expect('True').toBeTruthy;
});
test('renders correctly', () => {
  const component = renderer
    .create(<ButtonLayout />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
