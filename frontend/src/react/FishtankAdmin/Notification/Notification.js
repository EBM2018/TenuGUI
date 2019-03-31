import React from 'react';
import PropTypes from 'prop-types';
import { postFishtankInteraction } from '../../../service/API/interactions';


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
        <div className="column is-3">
          <h2 className="is-h2 add15-margin-top">Notification élèves</h2>
          <div className="columns">
            <div className="column">
              <p>
                {' '}
                {stopString}
                {' '}
              </p>
              <p> Pause : </p>
              <p> Ralentir : </p>
              <p> Accelerer : </p>
              <p> Bien :  </p>
              <p> Details :  </p>
              <p> Exemples : </p>
              <p> Anecdote : </p>
              <p> References: </p>
              <p> Explication :  </p>
              <p> Incompréhension : </p>
            </div>

            <div className="column">
              <progress value={nbInteractions.emergencyPresses} max={nbStudent} />
              <progress value={nbInteractions.pauseRequests} max={nbStudent} />
              <progress value={nbInteractions.slowerRhythmRequests} max={nbStudent} />
              <progress value={nbInteractions.fasterRhythmRequests} max={nbStudent} />
              <progress value={nbInteractions.coolPresses} max={nbStudent} />
              <progress value={nbInteractions.detailsRequests} max={nbStudent} />
              <progress value={nbInteractions.examplesRequests} max={nbStudent} />
              <progress value={nbInteractions.triviaRequests} max={nbStudent} />
              <progress value={nbInteractions.referenceRequests} max={nbStudent} />
              <progress value={nbInteractions.explanationsRequests} max={nbStudent} />
              <progress value={nbInteractions.lowUnderstandingNotifications} max={nbStudent} />
              <button
                type="button"
                onClick={() => {
                  postFishtankInteraction(fishtankId, idInteractions.PARTICIPANT.EMERGENCY_PRESS, '');
                }}
              >
                    add
              </button>

            </div>
          </div>
        </div>
      );
    }
}

export default Notification;
/*
 <progress value={nbAskQuestion} max={nbStudent} />
          <progress value={nbAskSpeedUp} max={nbStudent} />
          <progress value={nbAskSpeedDown} max={nbStudent} />
          <progress value={nbNotUnderstand} max={nbStudent} />
          <progress value={nbAskStop} max={nbStudent} />
          <progress value={nbAskReexplain} max={nbStudent} />
          <progress value={nbAskDetails} max={nbStudent} />
          <progress value={nbAskExample} max={nbStudent} />
          <progress value={nbAskAnecdote} max={nbStudent} />
          <progress value={nbAskReference} max={nbStudent} />
          <progress value={nbAskExercice} max={nbStudent} />
 */
