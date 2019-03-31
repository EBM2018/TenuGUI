import React from 'react';
import PropTypes from 'prop-types';
import { sendNewInteractionEmission } from '../../../service/API/requests';


class Notification extends React.PureComponent {
    static propTypes = {
      fishtankId: PropTypes.number.isRequired,
      idInteractions: PropTypes.arrayOf([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      nbInteractions: PropTypes.arrayOf([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      nbStudent: PropTypes.number.isRequired,
    }

    render() {
      const {
        fishtankId,
        idInteractions,
        nbInteractions,
        nbStudent,
      } = this.props;
      const stopString = "Arret d'urgence : ";
      return (
        <div className="column is-3 add15-margin-top add-margin">
          <h2 className="is-h2">Notification élèves</h2>
          <p className="is-body">
            {' '}
            {stopString}
            {' '}
          </p>
          <progress className="progress is-link" value={nbInteractions.emergencyPresses} max={nbStudent} />
          <p className="is-body"> Pause : </p>
          <progress className="progress is-link" value={nbInteractions.pauseRequests} max={nbStudent} />
          <p className="is-body">  Ralentir : </p>
          <progress className="progress is-link" value={nbInteractions.slowerRhythmRequests} max={nbStudent} />
          <p className="is-body"> Accelerer : </p>
          <progress className="progress is-link" value={nbInteractions.fasterRhythmRequests} max={nbStudent} />
          <p className="is-body"> Bien :  </p>
          <progress className="progress is-link" value={nbInteractions.coolPresses} max={nbStudent} />
          <p className="is-body"> Details :  </p>
          <progress className="progress is-link" value={nbInteractions.detailsRequests} max={nbStudent} />
          <p className="is-body"> Exemples : </p>
          <progress className="progress is-link" value={nbInteractions.examplesRequests} max={nbStudent} />
          <p className="is-body"> Anecdote : </p>
          <progress className="progress is-link" value={nbInteractions.triviaRequests} max={nbStudent} />
          <p className="is-body"> References: </p>
          <progress className="progress is-link" value={nbInteractions.referenceRequests} max={nbStudent} />
          <p className="is-body"> Explication :  </p>
          <progress className="progress is-link" value={nbInteractions.explanationsRequests} max={nbStudent} />
          <p className="is-body"> Incompréhension : </p>
          <progress className="progress is-link" value={nbInteractions.lowUnderstandingNotifications} max={nbStudent} />
          <button
            type="button"
            onClick={() => {
              sendNewInteractionEmission(fishtankId, idInteractions.PARTICIPANT.EMERGENCY_PRESS, '');
            }}
          >
                    add
          </button>
        </div>
      );
    }
}

export default Notification;
