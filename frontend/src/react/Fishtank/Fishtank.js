import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import './Fishtank.css';

import FishtankHeader from '../Widgets/FishtankHeader/FishtankHeader';
import ButtonLayout from './ButtonLayout/ButtonLayout';
import Activity from '../Widgets/Activity/Activity';
import { handleFishtankCreation } from '../../service/Websockets/handlers';
import { getFishtank, showFishtank } from '../../service/API/fishtanks';
import { getFishtankInteractions, getIdInteractions } from '../../service/API/interactions';


const dataJson = {
  name: 'Feedback',
  Question: [
    {
      type: 'field',
      idQuestion: '1',
      text: "Qu'est ce que tu as appris ?",
    },
    {
      type: 'field',
      idQuestion: '2',
      text: "Qu'est ce qui t'as étonné ?",
    },
    {
      type: 'field',
      idQuestion: '3',
      text: "Qu'est ce que tu voudrais avoir plus ou en plus ?",
    },
    {
      type: 'field',
      idQuestion: '4',
      text: "Qu'est ce que tu voudrais avoir moins ou en moins ?",
    },
    {
      type: 'check',
      idQuestion: '5',
      text: 'Cb tu notes ce cour ?',
      response: [
        { rep: '1' },
        { rep: '2' },
        { rep: '3' },
        { rep: '4' },
        { rep: '5' },
      ],
    },
  ],
};
const dataNull = {
  name: '',
  Question: [
  ],
};

class Fishtank extends React.PureComponent {
    static propTypes = {
      history: ReactRouterPropTypes.history.isRequired,
      cookies: instanceOf(Cookies).isRequired,
    }

    state = {
      connected: false,
      fishtankId: undefined,
      nameFishtank: 'EBM',
      date: '',
      chapitre: '',
      idInteractions: undefined,
      activityJSON: dataNull,
    }

    componentWillMount() {
      const { cookies } = this.props;
      const userJSON = cookies.get('userJSON');
      if (userJSON === undefined) {
        const { history } = this.props;
        history.push('/');
      } else {
        try {
          this.connectToFishtank();
          this.getFishtankIdInteractions();
          this.setState({ connected: true });
        } catch {
          console.log('pas de Fishtank');
        }
      }
    }

    connectToFishtank = async () => {
      const { cookies } = this.props;
      const userJSON = cookies.get('userJSON');
      const fishtankIds = await getFishtank(userJSON.token);
      const FishtankIdList = fishtankIds.fishtankIds;
      const fishtankId = FishtankIdList[FishtankIdList.length - 1];
      handleFishtankCreation(fishtankId,
        this.getFishtankNbInteractions,
        this.fishtankInteractionsStudent);
      this.setState({ fishtankId });
      const infoFishtank = await showFishtank(fishtankId, userJSON.token);
      this.setState({ date: infoFishtank.fishtank.createdAt });
    }

    tryConnexion = () => {
      try {
        this.connectToFishtank();
        this.setState({ connected: true });
      } catch {
        console.log('pas de Fishtank');
      }
    }

    getFishtankIdInteractions = async () => {
      const idInteractions = await getIdInteractions();
      this.setState({ idInteractions });
      console.log(idInteractions);
    };


    getFishtankNbInteractions = async () => {
      const { fishtankId } = this.state;
      const interactions = await getFishtankInteractions(fishtankId);
      this.setState({ chapitre: interactions.currentPeriod });
    };

    fishtankInteractionsStudent = () => {
      this.setState({ activityJSON: dataJson });
    }

    deleteActivityJSON = () => {
      this.setState({ activityJSON: dataNull });
    }

    render() {
      const {
        connected,
        fishtankId,
        nameFishtank,
        date,
        chapitre,
        idInteractions,
        activityJSON,
      } = this.state;
      return (
        <div className="bg-color">
          <FishtankHeader
            subject={nameFishtank}
            date={date}
            chapitre={chapitre}
          />
          <ButtonLayout
            fishtankId={fishtankId}
            idInteractions={idInteractions}
          />
          <button
            type="button"
            onClick={this.tryConnexion}
            hidden={connected}
          >
                  Chercher un Fishtank
          </button>
          <Activity
            fishtankId={fishtankId}
            idInteractions={idInteractions}
            data={activityJSON}
            deleteData={this.deleteActivityJSON}
          />
          <button
            type="button"
            onClick={this.fishtankInteractionsStudent}
          >
              test
          </button>
        </div>
      );
    }
}
/*
<>
          <FishtankHeader
            subject="EBM example"
            date="some date"
          />
          <ButtonLayout
            fishtankId={fishtankId}
          />
          <button
            type="button"
            onClick={this.tryConnexion}
            hidden={connected}
          >
              Chercher un Fishtank
          </button>
          <ActivityContainer
            fishtankId={fishtankId}
          />
        </>
 */
export default withCookies(Fishtank);
