import React from 'react';
import renderer from 'react-test-renderer';
import Layout from '../react/Layout/Layout.js';
import CheckBox from '../react/Widgets/Activity/CheckBox';

test('derp', () => {
  expect('True').toBeTruthy;
});
test('Layout renders correctly', () => {
  const component = renderer
    .create(<Layout children={<CheckBox id={1} reponse="42" fctChecked={() => 'This is a test'} />} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
