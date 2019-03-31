import React from 'react';
import PropTypes from 'prop-types';

import { postFishtankInteraction } from '../../../service/API/interactions';

// import ListSpeed from './ListSpeed/ListSpeed.js'; PERIOD_CHANGE: 5
// import ListAccuracy from './ListAccuracy/ListAccuracy.js'; UNDERSTANDING_ASK: 18

class ButtonLayout extends React.PureComponent {
    static propTypes = {
      fishtankId: PropTypes.number.isRequired,
      idInteractions: PropTypes.arrayOf([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
    }

    render() {
      const { fishtankId, idInteractions } = this.props;
      return (
        <div className="bg-color">
          <div className="columns add-margin ">
            <div className="column is-3 has-text-left">
              <p className="control has-icons-left has-icons-right">
                <button
                  className="button is-info is-inverted is-fullwidth"
                  type="button"
                  name="button"
                  onClick={() => {
                    postFishtankInteraction(fishtankId, idInteractions.ADMIN.PROGRESSION_ASK, '');
                  }}
                >
                    Vous avez compris ?
                </button>
                <span className="icon is-small is-left">
                  <i className="fas fa-brain" />
                </span>
              </p>
            </div>

            <div className="column is-3 has-text-left">
              <p className="control has-icons-left has-icons-right">
                <button
                  className="button is-info is-inverted is-fullwidth"
                  type="button"
                  name="button"
                  onClick={() => {
                    postFishtankInteraction(fishtankId, idInteractions.ADMIN.SUMMARY_ASK, '');
                  }}
                >
                    Faites un résumé
                </button>
                <span className="icon is-small is-left">
                  <i className="fas fa-brain" />
                </span>
              </p>
            </div>

            <div className="column is-3 has-text-left">
              <p className="control has-icons-left has-icons-right">
                <button
                  className="button is-info is-inverted is-fullwidth"
                  type="button"
                  name="button"
                  onClick={() => {
                    console.log('TODO');
                  }}
                >
                          Vous en êtes où ?
                </button>
                <span className="icon is-small is-left">
                  <i className="fas fa-brain" />
                </span>
              </p>
            </div>

            <div className="column is-3 has-text-left">
              <p className="control has-icons-left has-icons-right">
                <button
                  className="button is-info is-inverted is-fullwidth"
                  type="button"
                  name="button"
                  onClick={() => {
                    postFishtankInteraction(fishtankId, idInteractions.ADMIN.ATTENTION_ASK, '');
                  }}
                >
                          Votre attention svp !
                </button>
                <span className="icon is-small is-left">
                  <i className="fas fa-brain" />
                </span>
              </p>
            </div>

          </div>
        </div>
      );
    }
}

export default ButtonLayout;
