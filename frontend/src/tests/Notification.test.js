import React from 'react';
import renderer from 'react-test-renderer';
import Notification from '../react/FishtankAdmin/Notification/Notification';

test('derp', () => {
  expect('True').toBeTruthy;
});
test('does this render', () => {
  const component = renderer
    .create(<Notification />);
  const tree = component.toJSON();
});
