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
      const { cookies } = this.props;
      const userJSON = cookies.get('userJSON');
      const fishtankId = cookies.get('fishtankId');
      console.log(`connexion? : ${fishtankId}`);
      if (userJSON === undefined
          || userJSON.shoalId !== undefined
          || fishtankId === undefined) {
        const { history } = this.props;
        history.push('/');
      } else {
        createSocketFishtank(fishtankId, this.fishtankInteractionsTeacher);
        console.log(`connexion : ${fishtankId}`);
      }
    }

    fishtankInteractionsTeacher = async (socket) => {
      const { fishtankId } = this.state;
      if (socket.type === 991) {
        let { nbAskQuestion } = this.state;
        nbAskQuestion += 1;
        this.setState({ nbAskQuestion });
      }
      const interactions = await handleNewInteractionEmission(fishtankId);
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
      const { cookies } = this.props;
      const fishtankId = cookies.get('fishtankId')
      return (
        <div className="bg-color">
          <FishtankHeader
            subject="EBM example"
            date="some date"
            my="Mon"
          />
          <ButtonLayout
            fishtankId={fishtankId}
          />
          <div className="columns">
            <Command
              fishtankId={fishtankId}
            />

            <Preview
              fishtankId={fishtankId}
            />

            <Notification
              fishtankId={fishtankId}
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
