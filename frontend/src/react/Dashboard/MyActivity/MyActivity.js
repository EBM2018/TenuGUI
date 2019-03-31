import React from 'react';
import { DashboardMyActivity } from '../../../service/Dashboard/Dashboard';

const MyActivity = () => (
  <>
    <h2 className="is-h2">Mes Activités</h2>
    <button
      className="button is-info is-inverted"
      type="button"
      name="button"
      onClick={DashboardMyActivity.openActivity}
    >
          Ouverture
    </button>
    <button
      className="button is-info is-inverted"
      type="button"
      name="button"
      onClick={DashboardMyActivity.openFeedbackActivity}
    >
          Feedback
    </button>
  </>
);

export default MyActivity;
