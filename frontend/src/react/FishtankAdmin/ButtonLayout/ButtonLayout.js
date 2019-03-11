import React from 'react';

import './ButtonLayout.css';
import { ActionsFishtankAdmin } from '../../../service/FishtankAdmin/FishtankAdmin';

// import ListSpeed from './ListSpeed/ListSpeed.js';
// import ListAccuracy from './ListAccuracy/ListAccuracy.js';

const ButtonLayout = () => (
  <div id="ButtonLayoutContainer">
    <button type="button" id="AskUnderstanding" onClick={ActionsFishtankAdmin.askUnderstanding}>
      Vous avez compris ?
    </button>

    <button type="button" id="AskSummary" onClick={ActionsFishtankAdmin.askSummary}>
      Faites un résumé
    </button>

    <button type="button" id="AskPosition" onClick={ActionsFishtankAdmin.askPosition}>
      Vous en êtes où ?
    </button>

    <button type="button" id="AskAttention" onClick={ActionsFishtankAdmin.askAttention}>
      Votre attention svp !
    </button>

    <button type="button" id="Reboot" onClick={ActionsFishtankAdmin.askReboot}>
      Reboost
    </button>
  </div>
);

export default ButtonLayout;
