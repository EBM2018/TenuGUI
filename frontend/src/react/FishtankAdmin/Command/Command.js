import React from 'react';

import PropTypes from 'prop-types';
import { CommandFishtankAdmin } from '../../../service/FishtankAdmin/FishtankAdmin';

class Command extends React.PureComponent {
    static propTypes = {
      fishtankId: PropTypes.number.isRequired,
    }

    render() {
      const { fishtankId } = this.props;
      return (
        <div>
          <div id="title"> Mon fils rouge </div>

          <div id="ButtonLayoutContainer">
            <button
              type="button"
              id="Start"
              onClick={() => { CommandFishtankAdmin.startActivity(fishtankId); }}
            >
        Ouverture
            </button>
            <button
              type="button"
              id="AskSummary"
              onClick={() => { CommandFishtankAdmin.askSummary(fishtankId); }}
            >
        Faites un résumé
            </button>
            <button
              type="button"
              id="AskFeedback"
              onClick={() => { CommandFishtankAdmin.askFeedback(fishtankId); }}
            >
        Feedback
            </button>
          </div>
        </div>
      );
    }
}

export default Command;
