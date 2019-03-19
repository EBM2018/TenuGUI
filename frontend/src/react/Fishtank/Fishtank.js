import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import './Fishtank.css';

import PropTypes from 'prop-types';
import FishtankHeader from '../Widgets/FishtankHeader/FishtankHeader';
import ButtonLayout from './ButtonLayout/ButtonLayout';
import ActivityContainer from './ActivityContainer/ActivityContainer';
import { createSocketFishtank } from '../../service/API/requests';

const fixtureFishtankId = 130;

class Fishtank extends React.PureComponent {
    static propTypes = {
      history: ReactRouterPropTypes.history.isRequired,
      cookies: instanceOf(Cookies).isRequired,
      infoFishtank: PropTypes.func.isRequired,
      changeInfo: PropTypes.func.isRequired,
    }

    componentWillMount() {
      const { cookies } = this.props;
      const userJSON = cookies.get('userJSON');
      if (userJSON === undefined) {
        const { history } = this.props;
        history.push('/');
      } else {
        createSocketFishtank(fixtureFishtankId, this.fishtankInteractionsStudent);
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
      return (
        <>
          <FishtankHeader
            subject="EBM example"
            date="some date"
          />
          <ButtonLayout
            fishtankId={fixtureFishtankId}
          />
          <ActivityContainer
            fishtankId={fixtureFishtankId}
          />
        </>
      );
    }
}

export default withCookies(Fishtank);
