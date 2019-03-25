import React from 'react';
import PropTypes from 'prop-types';

import './ButtonLayout.css';
import { ActionsFishtankAdmin } from '../../../service/FishtankAdmin/FishtankAdmin';
import { StudentFishtank } from '../../../service/Fishtank/Fishtank';

// import ListSpeed from './ListSpeed/ListSpeed.js';
// import ListAccuracy from './ListAccuracy/ListAccuracy.js';


class ButtonLayout extends React.PureComponent {
    static propTypes = {
      fishtankId: PropTypes.number.isRequired,
    }

    render() {
      const { fishtankId } = this.props;
      return (
        <div id="ButtonLayoutContainer">
          <button
            type="button"
            id="AskUnderstanding"
            onClick={() => { ActionsFishtankAdmin.askUnderstanding(fishtankId); }}
          >
                    Vous avez compris ?
          </button>
          <button
            type="button"
            id="AskSummary"
            onClick={() => { ActionsFishtankAdmin.askSummary(fishtankId); }}
          >
                    Faites un résumé
          </button>
          <button
            type="button"
            id="AskPosition"
            onClick={() => { ActionsFishtankAdmin.askPosition(fishtankId); }}
          >
                    Vous en êtes où ?
          </button>
          <button
            type="button"
            id="AskAttention"
            onClick={() => { ActionsFishtankAdmin.askAttention(fishtankId); }}
          >
                    Votre attention svp !
          </button>
          <button
            type="button"
            id="Reboot"
              // onClick={() => { ActionsFishtankAdmin.askReboost(fishtankId); }}
            onClick={() => { StudentFishtank.askStop(fishtankId); }}
          >
                    Test Stop
          </button>
        </div>
      );
    }
}

export default ButtonLayout;
