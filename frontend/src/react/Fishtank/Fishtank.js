import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import './Fishtank.css';

import FishtankHeader from '../Widgets/FishtankHeader/FishtankHeader';
import ButtonLayout from './ButtonLayout/ButtonLayout';
import Activity from '../Widgets/Activity/Activity';
import { createSocketFishtank, getFishtank, getIdInteractions } from '../../service/API/requests';

class Fishtank extends React.PureComponent {
    static propTypes = {
      history: ReactRouterPropTypes.history.isRequired,
      cookies: instanceOf(Cookies).isRequired,
    }

    state = {
      connected: false,
      fishtankId: undefined,
      idInteractions: undefined,
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
          this.setState({ connected: true });
          this.getFishtankIdInteractions();
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
      createSocketFishtank(fishtankId, this.fishtankInteractionsStudent);
      this.setState({ fishtankId });
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

    fishtankInteractionsStudent = () => {
      console.log('interaction reçue');
    }

    render() {
      const { connected, fishtankId, idInteractions } = this.state;
      return (
        <div className="bg-color">
          <FishtankHeader
            subject="EBM example"
            date="some date"
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
          />
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
