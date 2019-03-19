import React from 'react';
import { instanceOf } from 'prop-types';
import { Cookies } from 'react-cookie';
import PropTypes from 'prop-types';

class Notification extends React.PureComponent {
    static propTypes = {
      nbAlert: PropTypes.number.isRequired,
      changeNbAlert: PropTypes.func.isRequired,
    }


    add = () => {
      let { nbAlert } = this.props;
      const { changeNbAlert } = this.props;
      nbAlert += 1;
      changeNbAlert(nbAlert);
    }

    reset = () => {
      const { changeNbAlert } = this.props;
      changeNbAlert(0);
    }

    render() {
      const { nbAlert } = this.props;
      return (
        <>
          <div> Notification élèves</div>

          <div id="ListNotification">
              Nombre de demande d'arret d'urgence =
            {' '}
            {nbAlert}
          </div>
          <button type="button" onClick={this.add}> +1 </button>
          <button type="button" onClick={this.reset}> reset </button>

        </>
      );
    }
}

export default Notification;
