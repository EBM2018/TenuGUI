import React from 'react';
import renderer from 'react-test-renderer';
import Command from '../react/FishtankAdmin/Command/Command';


test('does this render', () => {
  const component = renderer
    .create(<Command fishtankId={130} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
