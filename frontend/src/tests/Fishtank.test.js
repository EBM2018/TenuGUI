import React from 'react';
import renderer from 'react-test-renderer';
import Fishtank from '../react/Fishtank/Fishtank';


test('derp', () => {
  expect('True').toBeTruthy;
});
test('does this render', () => {
  const component = renderer
    .create(<Fishtank />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
