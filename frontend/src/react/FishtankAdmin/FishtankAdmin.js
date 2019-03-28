import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withCookies, Cookies } from 'react-cookie';

import './FishtankAdmin.css';

import FishtankHeader from '../Widgets/FishtankHeader/FishtankHeader';
import ButtonLayout from './ButtonLayout/ButtonLayout';
import Command from './Command/Command';
import Preview from './Preview/Preview';
import Notification from './Notification/Notification';
import { handleNewInteractionEmission, createSocketFishtank } from '../../service/API/requests';

class FishtankAdmin extends React.PureComponent {
    static propTypes = {
      history: ReactRouterPropTypes.history.isRequired,
      cookies: PropTypes.instanceOf(Cookies).isRequired,
      infoFishtank: PropTypes.func.isRequired,
    }

    state = {
      nbStudent: 24,
      nbAskQuestion: 0,
      nbAskSpeedUp: 0,
      nbAskSpeedDown: 0,
      nbNotUnderstand: 0,
      nbAskStop: 0,
      nbAskReexplain: 0,
      nbAskDetails: 0,
      nbAskExample: 0,
      nbAskAnecdote: 0,
      nbAskReference: 0,
      nbAskExercice: 0,
    }

    componentWillMount() {
      const { cookies, infoFishtank } = this.props;
      const userJSON = cookies.get('userJSON');
      if (userJSON === undefined
          || userJSON.shoalId !== undefined
          || infoFishtank === undefined
          || infoFishtank.body === undefined
          || infoFishtank.body.fishtankId === undefined) {
        const { history } = this.props;
        history.push('/');
      } else {
        createSocketFishtank(infoFishtank.body.fishtankId, this.fishtankInteractionsTeacher);
        console.log(`connexion : ${infoFishtank.body.fishtankId}`);
      }
    }

    fishtankInteractionsTeacher = async (socket) => {
      const { infoFishtank } = this.props;
      if (socket.type === 991) {
        let { nbAskQuestion } = this.state;
        nbAskQuestion += 1;
        this.setState({ nbAskQuestion });
      }
      const interactions = await handleNewInteractionEmission(infoFishtank.body.fishtankId);
      console.log(interactions);
      this.setState({ nbAskStop: interactions.emergencyPresses });
    };

    changeNbAlert = (newNb) => {
      this.setState({ nbAskStop: newNb });
    };

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
      } = this.state;
      const { infoFishtank } = this.props;
      return (
        <div className="bg-color">
          <FishtankHeader
            subject="EBM example"
            date="some date"
            my="Mon"
          />
          <ButtonLayout
            fishtankId={infoFishtank.body.fishtankId}
          />
          <div className="columns">
            <Command
              fishtankId={infoFishtank.body.fishtankId}
            />

            <Preview
              fishtankId={infoFishtank.body.fishtankId}
            />

            <Notification
              fishtankId={infoFishtank.body.fishtankId}
              nbStudent={nbStudent}
              nbAskQuestion={nbAskQuestion}
              nbAskSpeedUp={nbAskSpeedUp}
              nbAskSpeedDown={nbAskSpeedDown}
              nbNotUnderstand={nbNotUnderstand}
              nbAskStop={nbAskStop}
              nbAskReexplain={nbAskReexplain}
              nbAskDetails={nbAskDetails}
              nbAskExample={nbAskExample}
              nbAskAnecdote={nbAskAnecdote}
              nbAskReference={nbAskReference}
              nbAskExercice={nbAskExercice}
              changeNbAlert={this.changeNbAlert}
            />

          </div>
        </div>
      );
    }
}

export default withCookies(FishtankAdmin);
