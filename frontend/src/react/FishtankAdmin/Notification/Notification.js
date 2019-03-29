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
      changeNbAlert: PropTypes.func.isRequired,
    }

    reset = () => {
      const { changeNbAlert } = this.props;
      changeNbAlert(0);
    }

    render() {
      const {
        fishtankId,
        idInteractions,
        nbInteractions,
      } = this.props;
      const nbStudent = 10;
      return (
        <div className="column is-3">
          <h2 className="is-h2 add15-margin-top">Notification élèves</h2>

          <progress value={0} max={nbStudent} data-label="Question :" />
          <progress value={0} max={nbStudent} data-label="Plus vite :" />
          <progress value={0} max={nbStudent} data-label="Moins vite :" />
          <progress value={0} max={nbStudent} data-label="Ne comprends pas :" />
          <progress value={nbInteractions.emergencyPressesCount} max={nbStudent} data-label="STOP :" />
          <progress value={0} max={nbStudent} data-label="Reexplication :" />
          <progress value={0} max={nbStudent} data-label="Details :" />
          <progress value={0} max={nbStudent} data-label="Exemple :" />
          <progress value={0} max={nbStudent} data-label="Anecdote :" />
          <progress value={0} max={nbStudent} data-label="Reference :" />
          <progress value={0} max={nbStudent} data-label="Exercice :" />
          <button type="button" onClick={this.add} hidden> +1 </button>
          <button type="button" onClick={this.reset} hidden> reset </button>
          <button
            type="button"
            onClick={() => {
                console.log(idInteractions.EMERGENCY_PRESS);
                console.log(fishtankId);
              sendNewInteractionEmission(fishtankId, idInteractions.EMERGENCY_PRESS, '');
            }}
          >
                    add
          </button>
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
