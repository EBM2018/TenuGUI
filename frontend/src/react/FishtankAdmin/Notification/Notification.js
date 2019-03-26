import React from 'react';
import PropTypes from 'prop-types';

class Notification extends React.PureComponent {
    static propTypes = {
      nbStudent: PropTypes.number.isRequired,
      nbAskQuestion: PropTypes.number.isRequired,
      nbAskSpeedUp: PropTypes.number.isRequired,
      nbAskSpeedDown: PropTypes.number.isRequired,
      nbNotUnderstand: PropTypes.number.isRequired,
      nbAskStop: PropTypes.number.isRequired,
      nbAskReexplain: PropTypes.number.isRequired,
      nbAskDetails: PropTypes.number.isRequired,
      nbAskExample: PropTypes.number.isRequired,
      nbAskAnecdote: PropTypes.number.isRequired,
      nbAskReference: PropTypes.number.isRequired,
      nbAskExercice: PropTypes.number.isRequired,
      changeNbAlert: PropTypes.func.isRequired,
    }

    add = () => {
      let { nbAskStop } = this.props;
      const { changeNbAlert } = this.props;
      nbAskStop += 1;
      changeNbAlert(nbAskStop);
    }

    reset = () => {
      const { changeNbAlert } = this.props;
      changeNbAlert(0);
    }

    render() {
      const {
        nbStudent,
        nbAskQuestion,
        nbAskSpeedUp,
        nbAskSpeedDown,
        nbNotUnderstand,
        nbAskStop,
        nbAskReexplain,
        nbAskDetails,
        nbAskExample,
        nbAskAnecdote,
        nbAskReference,
        nbAskExercice,
      } = this.props;
      return (
        <div className="column is-3">
          <h2 className="is-h2 add15-margin-top">Notification élèves</h2>

          <progress value={nbAskQuestion} max={nbStudent} data-label="Question :" />
          <progress value={nbAskSpeedUp} max={nbStudent} data-label="Plus vite :" />
          <progress value={nbAskSpeedDown} max={nbStudent} data-label="Moins vite :" />
          <progress value={nbNotUnderstand} max={nbStudent} data-label="Ne comprends pas :" />
          <progress value={nbAskStop} max={nbStudent} data-label="STOP :" />
          <progress value={nbAskReexplain} max={nbStudent} data-label="Reexplication :" />
          <progress value={nbAskDetails} max={nbStudent} data-label="Details :" />
          <progress value={nbAskExample} max={nbStudent} data-label="Exemple :" />
          <progress value={nbAskAnecdote} max={nbStudent} data-label="Anecdote :" />
          <progress value={nbAskReference} max={nbStudent} data-label="Reference :" />
          <progress value={nbAskExercice} max={nbStudent} data-label="Exercice :" />
          <button type="button" onClick={this.add} hidden> +1 </button>
          <button type="button" onClick={this.reset} hidden> reset </button>
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
