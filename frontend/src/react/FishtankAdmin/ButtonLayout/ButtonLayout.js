import React from 'react';

import './ButtonLayout.css';
import {ActionsFishtankAdmin} from '../../../service/FishtankAdmin/FishtankAdmin';

// import ListSpeed from './ListSpeed/ListSpeed.js';
// import ListAccuracy from './ListAccuracy/ListAccuracy.js';

export default class ButtonLayout extends React.PureComponent {
  render() {
    return (
      <div id="ButtonLayoutContainer">
        <button id="AskUnderstanding" onClick={ActionsFishtankAdmin.askUnderstanding}>
                    Vous avez compris ?
        </button>

        <button id="AskSummary" onClick={ActionsFishtankAdmin.askSummary}>
                    Faites un résumé
        </button>

        <button id="AskPosition" onClick={ActionsFishtankAdmin.askPosition}>
                    Vous en êtes où ?
        </button>

        <button id="AskAttention" onClick={ActionsFishtankAdmin.askAttention}>
                    Votre attention svp !
        </button>

        <button id="Reboot" onClick={ActionsFishtankAdmin.askReboot}>
                    Reboost
        </button>
      </div>
    );
  }
}
