import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import './Fishtank.css';

import FishtankHeader from '../Widgets/FishtankHeader/FishtankHeader';
import ButtonLayout from './ButtonLayout/ButtonLayout';
import ActivityContainer from './ActivityContainer/ActivityContainer';

class Fishtank extends React.PureComponent {
    static propTypes = {
      history: ReactRouterPropTypes.history.isRequired,
      cookies: instanceOf(Cookies).isRequired,
    }

    componentWillMount() {
      const { cookies } = this.props;
      const userJSON = cookies.get('userJSON');
      if (userJSON === undefined) {
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
          />
          <ButtonLayout />
          <ActivityContainer />
        </>
      );
    }
}

export default withCookies(Fishtank);
