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
import { handleFishtankCreation } from '../../service/Websockets/handlers';
import ActivityObserver from './ActivityObserver/ActivityObserver';
import { getFishtankInteractions, getIdInteractions, postFishtankInteraction } from '../../service/API/interactions';
import { showFishtank } from '../../service/API/fishtanks';

class FishtankAdmin extends React.PureComponent {
    static propTypes = {
      history: ReactRouterPropTypes.history.isRequired,
      cookies: PropTypes.instanceOf(Cookies).isRequired,
    }

    state = {
      fishtankId: undefined,
      nameFishtank: 'EBM',
      date: '',
      chapitre: '',
      idInteractions: undefined,
      nbInteractions: {},
      nbStudent: 15,
      activityWaiting: false,
      nbFinished: 0,
    }

    componentWillMount() {
      const { cookies } = this.props;
      const userJSON = cookies.get('userJSON');
      const fishtankId = cookies.get('fishtankId');
      if (userJSON === undefined
          || userJSON.shoalId !== undefined
          || fishtankId === undefined) {
        const { history } = this.props;
        history.push('/');
      } else {
        this.setState({ fishtankId });
        handleFishtankCreation(fishtankId, this.getFishtankNbInteractions, () => {});
        this.getFishtankStart(fishtankId, userJSON);
      }
    }

    getFishtankNbInteractions = async () => {
      const { fishtankId } = this.state;
      const interactions = await getFishtankInteractions(fishtankId);
      this.setState({ nbInteractions: interactions.counts });
      this.setState({ chapitre: interactions.currentPeriod });
    };

    getFishtankStart = async (fishtankId, userJSON) => {
      this.getFishtankIdInteractions();
      const interactions = await getFishtankInteractions(fishtankId);
      this.setState({ nbInteractions: interactions.counts });
      this.setState({ chapitre: interactions.currentPeriod });
      const infoFishtank = await showFishtank(fishtankId, userJSON.token);
      this.setState({ date: infoFishtank.fishtank.createdAt });
    };

    getFishtankIdInteractions = async () => {
      const idInteractions = await getIdInteractions();
      console.log(idInteractions);
      this.setState({ idInteractions });
    };

    activeActivityObserver = () => {
      this.setState({ activityWaiting: true });
    };

    disableActivityObserver = () => {
      this.setState({ activityWaiting: false });
    };

        sendNewChapitre = (event) => {
          const { fishtankId, idInteractions } = this.state;
          if (event.keyCode === 13) {
            const object = event.target;
            postFishtankInteraction(
              fishtankId,
              idInteractions.ADMIN.PERIOD_CHANGE,
              object.value,
            );
          }
        }

        render() {
          const {
            fishtankId,
            nameFishtank,
            date,
            chapitre,
            idInteractions,
            nbInteractions,
            nbStudent,
            activityWaiting,
            nbFinished,
          } = this.state;
          /*
      const { cookies } = this.props;
      const fishtankId = cookies.get('fishtankId');
      console.log(`fishtankId : ${{ fishtankId }}`);
      */
          let middleScreen;
          if (activityWaiting) {
            middleScreen = (
              <ActivityObserver
                nameActivity="Feedback"
                fishtankId={fishtankId}
                nbFinished={nbFinished}
                nbStudent={nbStudent}
                disableActivityObserver={
                    this.disableActivityObserver
                }
              />
            );
          } else {
            middleScreen = <Preview />;
          }
          return (
            <div className="bg-color">
              <FishtankHeader
                subject={nameFishtank}
                date={date}
                my="Mon"
                chapitre={chapitre}
              />
              <input
                className="input"
                type="text"
                placeholder="nom du chapitre"
                onKeyUp={this.sendNewChapitre}
              />
              <ButtonLayout
                fishtankId={fishtankId}
                idInteractions={idInteractions}
              />
              <div className="columns add-margin">
                <Command
                  fishtankId={fishtankId}
                  idInteractions={idInteractions}
                  activeActivityObserver={this.activeActivityObserver}
                  disableActivityObserver={this.disableActivityObserver}
                />

                <div className="column is-5">
                  {middleScreen}
                </div>

                <Notification
                  fishtankId={fishtankId}
                  idInteractions={idInteractions}
                  nbInteractions={nbInteractions}
                  nbStudent={nbStudent}
                />

              </div>
            </div>
          );
        }
}

export default withCookies(FishtankAdmin);
