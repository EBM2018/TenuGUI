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
import { handleNewInteractionEmission, createSocketFishtank, getIdInteractions } from '../../service/API/requests';

class FishtankAdmin extends React.PureComponent {
    static propTypes = {
      history: ReactRouterPropTypes.history.isRequired,
      cookies: PropTypes.instanceOf(Cookies).isRequired,
    }

    state = {
      fishtankId: undefined,
      idInteractions: undefined,
      nbInteractions: { emergencyPressesCount: 0 },
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
        createSocketFishtank(fishtankId, this.fishtankInteractionsTeacher);
        this.getFishtankIdInteractions();
      }
    }

    fishtankInteractionsTeacher = async () => {
      const { fishtankId } = this.state;
      const interactions = await handleNewInteractionEmission(fishtankId);
      this.setState({ nbInteractions: interactions });
    };

    getFishtankIdInteractions = async () => {
      const idInteractions = await getIdInteractions();
      this.setState({ idInteractions });
    };

    changeNbAlert = () => {
      this.setState({ nbInteractions: {} });
    };

    render() {
      const {
        fishtankId,
        idInteractions,
        nbInteractions,
      } = this.state;
      /*
      const { cookies } = this.props;
      const fishtankId = cookies.get('fishtankId');
      console.log(`fishtankId : ${{ fishtankId }}`);
      */
      return (
        <div className="bg-color">
          <FishtankHeader
            subject="EBM example"
            date="some date"
            my="Mon"
          />
          <ButtonLayout
            fishtankId={fishtankId}
            idInteractions={idInteractions}
          />
          <div className="columns">
            <Command
              fishtankId={fishtankId}
              idInteractions={idInteractions}
            />

            <Preview
              fishtankId={fishtankId}
              idInteractions={idInteractions}
            />

            <Notification
              fishtankId={fishtankId}
              idInteractions={idInteractions}
              nbInteractions={nbInteractions}
              changeNbAlert={this.changeNbAlert}
            />

          </div>
        </div>
      );
    }
}

export default withCookies(FishtankAdmin);
