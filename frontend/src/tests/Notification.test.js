import React from 'react';
import renderer from 'react-test-renderer';
import Notification from '../react/FishtankAdmin/Notification/Notification';


test('does this render', () => {
  const component = renderer
    .create(<Notification
      changeNbAlert={() => {}}
      nbAskQuestion={0}
      nbAskSpeedDown={3}
      nbAskSpeedUp={2}
      nbAskStop={4}
      nbNotUnderstand={1}
    />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
