import React from 'react';

import './MyActions.css';

import { DashboardMyActions } from '../../../service/Dashboard/Dashboard';

export default class MyActions extends React.PureComponent {
  render() {
    return (
      <>
        <div>Mes Actions</div>
        <div id="actionsContainer">
          <button onClick={DashboardMyActions.askUnderstanding}>Vous avez Compris ?</button>
          <button onClick={DashboardMyActions.askAttention}>Votre attention svp !</button>
          <button onClick={DashboardMyActions.askSummary}>Faites un résumé</button>
          <button onClick={DashboardMyActions.askReboot}>Reboot</button>
          <button onClick={DashboardMyActions.askPosition}>Vous en êtes où ?</button>
        </div>
      </>
    );
  }
}
