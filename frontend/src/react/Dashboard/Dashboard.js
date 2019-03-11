import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import './Dashboard.css';

import MyActivity from './MyActivity/MyActivity';
import MyActions from './MyActions/MyActions';
import MyDescription from './MyDescription/MyDescription';
import { createFishtank } from '../../service/API/requests';

class Dashboard extends React.PureComponent {
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

    // TODO : change this, logic for new fishtank
    todoStartFishtank = async () => { // TODO : change this shit
      const { history } = this.props;
      createFishtank(() => history.push('/FishtankAdmin'));
    };

    render() {
      return (
        <>
          <div>
            <> Ma Bibliothèque </>
            <button type="button" onClick={this.todoStartFishtank}>
                Start Fishtank
            </button>
          </div>
          <div id="dashboardContainer">
            <p id="firstColumn">
              <MyActivity />
              <MyActions />
            </p>
            <p id="secondColumn">
              <MyDescription id="flex" />
            </p>
          </div>
        </>
      );
    }
}


export default withCookies(Dashboard);
// <button type="button" id="buttonStartFishtank"
// onClick={() => {history.push('/FishtankAdmin')}}>
// Démarrer une séance </button>
