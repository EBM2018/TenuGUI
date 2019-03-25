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
      nbAskQuestion: 0,
      nbAskSpeedUp: 0,
      nbAskSpeedDown: 0,
      nbNotUnderstand: 0,
      nbAskStop: 0,
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
        console.log(`connexion : ${infoFishtank.body.fishtankId}`);
      }
    }

    fishtankInteractionsTeacher = (socket) => {
      if (socket.type === 991) {
        let { nbAskQuestion } = this.state;
        nbAskQuestion += 1;
        this.setState({ nbAskQuestion });
      }
      if (socket.type === 992) {
        let { nbAskSpeedUp } = this.state;
        nbAskSpeedUp += 1;
        this.setState({ nbAskSpeedUp });
      }
      if (socket.type === 4) {
        let { nbAskSpeedDown } = this.state;
        nbAskSpeedDown += 1;
        this.setState({ nbAskSpeedDown });
      }
      if (socket.type === 994) {
        let { nbNotUnderstand } = this.state;
        nbNotUnderstand += 1;
        this.setState({ nbNotUnderstand });
      }
      if (socket.type === 2) {
        let { nbAskStop } = this.state;
        nbAskStop += 1;
        this.setState({ nbAskStop });
      }
    }

    changeNbAlert = (newNb) => {
      this.setState({ nbAskStop: newNb });
    }

    render() {
      const {
        nbAskQuestion,
        nbAskSpeedUp,
        nbAskSpeedDown,
        nbNotUnderstand,
        nbAskStop,
      } = this.state;
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
              nbAskQuestion={nbAskQuestion}
              nbAskSpeedUp={nbAskSpeedUp}
              nbAskSpeedDown={nbAskSpeedDown}
              nbNotUnderstand={nbNotUnderstand}
              nbAskStop={nbAskStop}
              changeNbAlert={this.changeNbAlert}
            />

          </div>
        </>
      );
    }
}

export default withCookies(FishtankAdmin);
