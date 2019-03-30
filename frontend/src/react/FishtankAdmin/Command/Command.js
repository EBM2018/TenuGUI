/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import PropTypes from 'prop-types';
import { sendNewInteractionEmission } from '../../../service/API/requests';

class Command extends React.PureComponent {
    static propTypes = {
      fishtankId: PropTypes.number.isRequired,
      idInteractions: PropTypes.arrayOf([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      activeActivityObserver: PropTypes.func.isRequired,
    }

    render() {
      const {
        fishtankId, idInteractions, activeActivityObserver,
      } = this.props;
      return (
        <div className="column add-margin-left add15-margin-top is-3">
          <h2 className="is-h2">Mon fil d'Arianne</h2>

          <button
            className="button"
            type="button"
            id="Start"
            onClick={() => {
              activeActivityObserver();
              sendNewInteractionEmission(fishtankId, idInteractions.ADMIN.ACTIVITY_CHANGE, '');
            }}
          >
        Ouverture
          </button>
          <button
            className="button"
            type="button"
            id="AskFeedback"
            onClick={() => {
              activeActivityObserver();
              sendNewInteractionEmission(fishtankId, idInteractions.ADMIN.FEEDBACK_ASK, '');
            }}
          >
        Feedback
          </button>
        </div>
      );
    }
}

export default Command;
