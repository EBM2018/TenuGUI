import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../react/Widgets/Header/Header';


test('derp', () => {
  expect('True').toBeTruthy;
});
test('does this render', () => {
  const component = renderer
    .create(<Header />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
