import React from 'react';
import renderer from 'react-test-renderer';
import Layout from '../react/Layout/Layout';
import CheckBox from '../react/Widgets/Activity/CheckBox';


test('Layout renders correctly', () => {
  const component = renderer
    .create(
      <Layout>

        <CheckBox id={1} reponse="42" fctChecked={() => 'This is a test'} check response="42" />

      </Layout>,
    );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
