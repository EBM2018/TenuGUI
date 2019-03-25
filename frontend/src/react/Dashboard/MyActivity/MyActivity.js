import React from 'react';
import { DashboardMyActivity } from '../../../service/Dashboard/Dashboard';

const MyActivity = () => (
  <>
    <div>Mes Activités</div>
    <div id="activityContainer">
      <button type="button" onClick={DashboardMyActivity.openActivity}>Ouverture</button>
      <button type="button" onClick={DashboardMyActivity.openFeedbackActivity}>FeedBack</button>
    </div>
  </>
);

export default MyActivity;
