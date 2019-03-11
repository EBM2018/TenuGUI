import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import './FishtankAdmin.css';

import FishtankHeader from '../Widgets/FishtankHeader/FishtankHeader';
import ButtonLayout from './ButtonLayout/ButtonLayout';
import Command from './Command/Command';
import Preview from './Preview/Preview';
import Notification from './Notification/Notification';
import Fishtank from '../Fishtank/Fishtank';

class FishtankAdmin extends React.PureComponent {
    static propTypes = {
      history: ReactRouterPropTypes.history.isRequired,
      cookies: instanceOf(Cookies).isRequired,
    }

    componentWillMount() {
      const { cookies } = this.props;
      const userJSON = cookies.get('userJSON');
      if ((userJSON === undefined) || (userJSON.shoalId !== undefined)) {
        const { history } = this.props;
        history.push('/');
      }
    }

    render() {
      return (
        <>
          <FishtankHeader
            subject="EBM example"
            date="some date"
            my="Mon"
          />
          <ButtonLayout />
          <div id="container">
            <Command id="firstColumn" />

            <Preview id="secondColumn" />

            <Notification />

          </div>
        </>
      );
    }
}

export default withCookies(FishtankAdmin);
