import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, cleanup } from 'react-testing-library';
import ActTextField from '../react/Widgets/Activity/ActTextField.js';

test('derp', () => {
  expect('True').toBeTruthy;
});
test('ActTextField behaves as expected', () => {
  const component = renderer
    .create(<ActTextField id={1} text="This is a test" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
