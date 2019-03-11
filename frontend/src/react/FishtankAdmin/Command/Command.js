import React from 'react';

import { CommandFishtankAdmin } from '../../../service/FishtankAdmin/FishtankAdmin';

const Command = () => (
  <div>
    <div id="title"> Mon fils rouge </div>

    <div id="ButtonLayoutContainer">
      <button type="button" id="Start" onClick={CommandFishtankAdmin.startActivity}>
        Ouverture
      </button>
      <button type="button" id="AskSummary" onClick={CommandFishtankAdmin.askSummary}>
        Faites un résumé
      </button>
      <button type="button" id="AskFeedback" onClick={CommandFishtankAdmin.askFeedback}>
        Feedback
      </button>
    </div>
  </div>
);

export default Command;
