import React from 'react';
import renderer from 'react-test-renderer';
import Fishtank from '../react/Fishtank/Fishtank';
import { createMemoryHistory } from 'history';


test('does this render', () => {
  const historyMock = createMemoryHistory('/dashboard');
  const component = renderer
    .create(<Fishtank history={historyMock} fishtankId={1} />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
