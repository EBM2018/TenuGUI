import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import './Fishtank.css';

import FishtankHeader from '../Widgets/FishtankHeader/FishtankHeader';
import ButtonLayout from './ButtonLayout/ButtonLayout';
import Activity from '../Widgets/Activity/Activity';
import { createSocketFishtank, getFishtank } from '../../service/API/requests';

class Fishtank extends React.PureComponent {
    static propTypes = {
      history: ReactRouterPropTypes.history.isRequired,
      cookies: instanceOf(Cookies).isRequired,
    }

    state = {
      connected: false,
      fishtankId: undefined,
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
        } catch {
          console.log('pas de Fishtank');
        }
      }
    }

    connectToFishtank = async () => {
      const { cookies } = this.props;
      const userJSON = cookies.get('userJSON');
      const FishtankId = await getFishtank(userJSON.token);
      createSocketFishtank(FishtankId, this.fishtankInteractionsStudent);
      this.setState({ fishtankId: FishtankId });
    }

    tryConnexion = () => {
      try {
        this.connectToFishtank();
        this.setState({ connected: true });
      } catch {
        console.log('pas de Fishtank');
      }
    }

    fishtankInteractionsStudent = (socket) => {
      if (socket.type === 11) {
        console.log('start new activity');
      }
      if (socket.type === 12) {
        console.log('demand a summary');
      }
      if (socket.type === 13) {
        console.log('demand feed back');
      }
      if (socket.type === 6) {
        console.log('demand if you understand');
      }
      if (socket.type === 7) {
        console.log('ask attention');
      }
      if (socket.type === 8) {
        console.log('demand a summary');
      }
      if (socket.type === 9) {
        console.log('ask for a reboost');
      }
      if (socket.type === 10) {
        console.log('demand position');
      }
    }

    render() {
      const { connected, fishtankId } = this.state;
      return (
        <div className="bg-color">
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
          <Activity
            fishtankId={fishtankId}
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
