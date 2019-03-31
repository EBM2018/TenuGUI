import React from 'react';
import renderer from 'react-test-renderer';
import ActTextField from '../react/Widgets/Activity/ActTextField';


test('ActTextField behaves as expected', () => {
  const component = renderer
    .create(<ActTextField id={1} text="This is a test" editResponse={() => {}} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
