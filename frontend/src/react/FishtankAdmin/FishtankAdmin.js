import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import './FishtankAdmin.css';

import PropTypes from 'prop-types';
import FishtankHeader from '../Widgets/FishtankHeader/FishtankHeader';
import ButtonLayout from './ButtonLayout/ButtonLayout';
import Command from './Command/Command';
import Preview from './Preview/Preview';
import Notification from './Notification/Notification';
import { sendNewInteractionEmission, createSocketFishtank } from '../../service/API/requests';

class FishtankAdmin extends React.PureComponent {
    static propTypes = {
      history: ReactRouterPropTypes.history.isRequired,
      cookies: instanceOf(Cookies).isRequired,
      infoFishtank: PropTypes.func.isRequired,
    }

    state = {
      alert: 0,
    }

    componentWillMount() {
      const { cookies, infoFishtank } = this.props;
      const userJSON = cookies.get('userJSON');
      if (userJSON === undefined
          || userJSON.shoalId !== undefined
          || infoFishtank === undefined) {
        const { history } = this.props;
        history.push('/');
      } else {
        createSocketFishtank(infoFishtank.body.fishtankId, this.fishtankInteractionsTeacher);
      }
    }

    fishtankInteractionsTeacher = (socket) => {
      if (socket === '1') {
        let { alert } = this.state;
        alert += 1;
        this.setState({ alert });
      }
    }

    changeNbAlert = (newNb) => {
      this.setState({ alert: newNb });
    }

    render() {
      const { alert } = this.state;
      const { infoFishtank } = this.props;
      return (
        <>
          <FishtankHeader
            subject="EBM example"
            date="some date"
            my="Mon"
          />
          <ButtonLayout />
          <div id="container">
            <Command
              id="firstColumn"
              fishtankId={infoFishtank.body.fishtankId}
            />

            <Preview
              id="secondColumn"
              fishtankId={infoFishtank.body.fishtankId}
            />

            <Notification
              nbAlert={alert}
              changeNbAlert={this.changeNbAlert}
            />

          </div>
        </>
      );
    }
}

export default withCookies(FishtankAdmin);
