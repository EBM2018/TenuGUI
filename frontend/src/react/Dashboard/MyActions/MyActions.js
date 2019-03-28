import React from 'react';

import './MyActions.css';
// import { DashboardMyActions } from '../../../service/Dashboard/Dashboard';
import { ActionsFishtankAdmin } from '../../../service/FishtankAdmin/FishtankAdmin';

const MyActions = () => (
  <>
    <div>Mes Actions</div>
    <div id="actionsContainer">
      <button type="button" onClick={ActionsFishtankAdmin.askUnderstanding}>Vous avez Compris ?</button>
      <button type="button" onClick={ActionsFishtankAdmin.askAttention}>Votre attention svp !</button>
      <button type="button" onClick={ActionsFishtankAdmin.askSummary}>Faites un résumé</button>
      <button type="button" onClick={ActionsFishtankAdmin.askReboot}>Reboot</button>
      <button type="button" onClick={ActionsFishtankAdmin.askPosition}>Vous en êtes où ?</button>
    </div>
  </>
);
export default MyActions;
