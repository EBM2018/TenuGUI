import React from 'react';
import renderer from 'react-test-renderer';
import CheckBox from '../react/Widgets/Activity/CheckBox.js';

test('derp', () => {
  expect('True').toBeTruthy;
});
test('CheckBox renders correctly', () => {
  const component = renderer
    .create(<CheckBox id={1} reponse="test" fctChecked={() => 'lel'} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
