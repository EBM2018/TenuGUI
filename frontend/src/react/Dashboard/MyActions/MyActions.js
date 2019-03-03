import React from 'react';

import './MyActions.css';

// import { DashboardMyActions } from '../../../service/Dashboard/Dashboard';
import { ActionsFishtankAdmin } from '../../../service/FishtankAdmin/FishtankAdmin';

export default class MyActions extends React.PureComponent {
  render() {
    return (
      <>
        <div>Mes Actions</div>
        <div id="actionsContainer">
          <button onClick={ActionsFishtankAdmin.askUnderstanding}>Vous avez Compris ?</button>
          <button onClick={ActionsFishtankAdmin.askAttention}>Votre attention svp !</button>
          <button onClick={ActionsFishtankAdmin.askSummary}>Faites un résumé</button>
          <button onClick={ActionsFishtankAdmin.askReboot}>Reboot</button>
          <button onClick={ActionsFishtankAdmin.askPosition}>Vous en êtes où ?</button>
        </div>
      </>
    );
  }
}
