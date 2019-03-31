import React from 'react';
import renderer from 'react-test-renderer';
import ActTextCheck from '../react/Widgets/Activity/ActTextCheck';


test('does this render', () => {
  const component = renderer
    .create(<ActTextCheck list_reponse={['yes', 'no']} text="maybe" editResponse={() => {}} id={1} listTextResponse={() => {}} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
