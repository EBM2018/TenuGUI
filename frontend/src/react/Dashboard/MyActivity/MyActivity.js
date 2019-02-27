import React from 'react';

import './MyActivity.css';

import { DashboardMyActivity } from '../../../service/Dashboard/Dashboard';

export default class MyActivity extends React.PureComponent {
  render() {
    return (
      <>
        <div>Mes Activités</div>
        <div id="activityContainer">
          <button onClick={DashboardMyActivity.openActivity}>Ouverture</button>
          <button onClick={DashboardMyActivity.openFeedbackActivity}>FeedBack</button>
        </div>
      </>
    );
  }
}
