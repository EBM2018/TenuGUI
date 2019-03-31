import React from 'react';
import renderer from 'react-test-renderer';
import CheckBox from '../react/Widgets/Activity/CheckBox.js';


test('CheckBox renders correctly', () => {
  const component = renderer
    .create(<CheckBox id={1} reponse="test" fctChecked={() => 'lel'} check response="42" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
