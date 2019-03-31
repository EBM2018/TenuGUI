import React from 'react';
import renderer from 'react-test-renderer';
import MyActivity from '../react/Dashboard/MyActivity/MyActivity';


test('does this render', () => {
  const component = renderer
    .create(<MyActivity />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
