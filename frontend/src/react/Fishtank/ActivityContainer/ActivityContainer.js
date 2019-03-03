import React from 'react';

import ActivityEditor from '../../Widgets/Activity/Activity';

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
