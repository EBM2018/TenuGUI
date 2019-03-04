import React from 'react';

import './MyActivity.css';

import { fct_Open_activity, fct_Open_Feedback_activity } from '../../../service/Dashboard/Dashboard';

export default class MyActivity extends React.PureComponent {
  render() {
    return (
      <>
        <div>Mes Activités</div>
        <div id="activityContainer">
          <button onClick={fct_Open_activity}>Ouverture</button>
          <button onClick={fct_Open_Feedback_activity}>FeedBack</button>
        </div>
      </>
    );
  }
}
