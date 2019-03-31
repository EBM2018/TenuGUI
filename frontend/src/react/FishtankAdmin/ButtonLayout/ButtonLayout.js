import React from 'react';
import PropTypes from 'prop-types';

import { ActionsFishtankAdmin } from '../../../service/FishtankAdmin/FishtankAdmin';

// import ListSpeed from './ListSpeed/ListSpeed.js';
// import ListAccuracy from './ListAccuracy/ListAccuracy.js';


class ButtonLayout extends React.PureComponent {
    static propTypes = {
      fishtankId: PropTypes.number.isRequired,
    }

    render() {
      const { fishtankId } = this.props;
      return (
        <div className="bg-color">
          <div className="columns add-margin ">
            <div className="column is-3 has-text-left">
              <p className="control has-icons-left has-icons-right">
                <button
                  className="button is-info is-inverted is-fullwidth"
                  type="button"
                  name="button"
                  onClick={() => { ActionsFishtankAdmin.askUnderstanding(fishtankId); }}
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
                  onClick={() => { ActionsFishtankAdmin.askSummary(fishtankId); }}
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
                  onClick={() => { ActionsFishtankAdmin.askPosition(fishtankId); }}
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
                  onClick={() => { ActionsFishtankAdmin.askAttention(fishtankId); }}
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
