import renderer from 'react-test-renderer';
import React from 'react';
import ButtonLayout from '../react/Fishtank/ButtonLayout/ButtonLayout';


test('renders correctly', () => {
  const component = renderer
    .create(<ButtonLayout fishtankId={130} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
