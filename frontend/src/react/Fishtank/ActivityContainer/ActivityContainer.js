import React from 'react';

import Activity from '../../Widgets/Activity/Activity';

export default class ActivityContainer extends React.PureComponent {
  render() {
    return (
      <div>
        ActivityContainer
        <Activity />
        End
      </div>
    );
  }
}
