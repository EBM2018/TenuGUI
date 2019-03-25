import React from 'react';
import PropTypes from 'prop-types';

class Notification extends React.PureComponent {
    static propTypes = {
      nbAskQuestion: PropTypes.number.isRequired,
      nbAskSpeedUp: PropTypes.number.isRequired,
      nbAskSpeedDown: PropTypes.number.isRequired,
      nbNotUnderstand: PropTypes.number.isRequired,
      nbAskStop: PropTypes.number.isRequired,
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
        nbAskQuestion,
        nbAskSpeedUp,
        nbAskSpeedDown,
        nbNotUnderstand,
        nbAskStop,
      } = this.props;
      return (
        <>
          <div> Notification élèves</div>

          <div id="ListNotification">
            <div>
                  Nombre de question =
              {' '}
              {nbAskQuestion}
            </div>
            <div>
                  Nombre de demande d'accélerer =
              {' '}
              {nbAskSpeedUp}
            </div>
            <div>
                  Nombre de demande de ralentir =
              {' '}
              {nbAskSpeedDown}
            </div>
            <div>
                  Nombre de personne largué =
              {' '}
              {nbNotUnderstand}
            </div>
            <div>
                  Nombre de demande d'arret d'urgence =
              {' '}
              {nbAskStop}
            </div>
          </div>
          <button type="button" onClick={this.add} hidden> +1 </button>
          <button type="button" onClick={this.reset} hidden> reset </button>

        </>
      );
    }
}

export default Notification;
