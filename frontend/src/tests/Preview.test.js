import React from 'react';
import renderer from 'react-test-renderer';
import Preview from '../react/FishtankAdmin/Preview/Preview';

test('derp', () => {
  expect('True').toBeTruthy;
});
test('does this render', () => {
  const component = renderer
    .create(<Preview />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
