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
      fishtankId={130}
      nbAskAnecdote={2}
      nbAskDetails={1}
      nbAskExample={0}
      nbAskExercice={3}
      nbAskReexplain={1}
      nbAskReference={2}
      nbStudent={10}
    />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
