/* eslint-disable import/named */
import React from 'react';

import { CommandFishtankAdmin } from '../../../service/FishtankAdmin/FishtankAdmin';

export default class Command extends React.PureComponent {
  render() {
    return (
      <div>
        <div id="title"> Mon fils rouge </div>

        <div id="ButtonLayoutContainer">
          <button id="Start" onClick={CommandFishtankAdmin.startActivity}>
            Ouverture
          </button>

          <button id="AskSummary" onClick={CommandFishtankAdmin.askSummary}>
            Faites un résumé
          </button>

          <button id="AskFeedback" onClick={CommandFishtankAdmin.askFeedback}>
            Feedback
          </button>
        </div>
      </div>
    );
  }
}
