import React from 'react';
import renderer from 'react-test-renderer';
import Command from '../react/FishtankAdmin/Command/Command';


test('derp', () => {
  expect('True').toBeTruthy;
});

test('does this render', () => {
  const component = renderer
    .create(<Command />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
