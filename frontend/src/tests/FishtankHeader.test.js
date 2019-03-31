import React from 'react';
import renderer from 'react-test-renderer';
import FishtankHeader from '../react/Widgets/FishtankHeader/FishtankHeader';


test('does this render', () => {
  const component = renderer
    .create(<FishtankHeader date="12/03/2019" subject="Testing in JS" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
