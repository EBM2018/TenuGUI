import React from 'react';

import ActivityEditor from '../../Widgets/ActivityEditor/ActivityEditor';

export default class ActivityContainer extends React.PureComponent {
  render() {
    return (
      <div>
        ActivityContainer
        <ActivityEditor />
        End
      </div>
    );
  }
}
