import React from 'react';

import './ButtonLayout.css';
import {
  fct_Action_ask_attention,
  fct_Action_ask_position,
  fct_Action_ask_summary,
  fct_Action_ask_understanding,
  fct_Action_reboot,
} from '../../../service/FishtankAdmin/FishtankAdmin';

// import ListSpeed from './ListSpeed/ListSpeed.js';
// import ListAccuracy from './ListAccuracy/ListAccuracy.js';

export default class ButtonLayout extends React.PureComponent {
  render() {
    return (
      <div id="ButtonLayoutContainer">
        <button id="AskUnderstanding" onClick={fct_Action_ask_understanding}>
                    Vous avez compris ?
        </button>

        <button id="AskSummary" onClick={fct_Action_ask_summary}>
                    Faites un résumé
        </button>

        <button id="AskPosition" onClick={fct_Action_ask_position}>
                    Vous en êtes où ?
        </button>

        <button id="AskAttention" onClick={fct_Action_ask_attention}>
                    Votre attention svp !
        </button>

        <button id="Reboot" onClick={fct_Action_reboot}>
                    Reboost
        </button>
      </div>
    );
  }
}
