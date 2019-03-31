import React from 'react';
import renderer from 'react-test-renderer';
import MyActions from '../react/Dashboard/MyActions/MyActions';


test('does this render', () => {
  const component = renderer
    .create(<MyActions />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
