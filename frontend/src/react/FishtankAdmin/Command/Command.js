/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import PropTypes from 'prop-types';
import { CommandFishtankAdmin } from '../../../service/FishtankAdmin/FishtankAdmin';

class Command extends React.PureComponent {
    static propTypes = {
      fishtankId: PropTypes.number.isRequired,
      idInteractions: PropTypes.arrayOf([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
    }

    render() {
      const { fishtankId } = this.props;
      return (
        <div className="column add-margin-left add15-margin-top is-3">
          <h2 className="is-h2">Mon fil d'Arianne</h2>

          <button
            className="button"
            type="button"
            id="Start"
            onClick={() => { CommandFishtankAdmin.startActivity(fishtankId); }}
          >
        Ouverture
          </button>
          <button
            className="button"
            type="button"
            id="AskSummary"
            onClick={() => { CommandFishtankAdmin.askSummary(fishtankId); }}
          >
        Faites un résumé
          </button>
          <button
            className="button"
            type="button"
            id="AskFeedback"
            onClick={() => { CommandFishtankAdmin.askFeedback(fishtankId); }}
          >
        Feedback
          </button>
        </div>
      );
    }
}

export default Command;
