import React from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withCookies, Cookies } from 'react-cookie';

import PropTypes from 'prop-types';
import MyActivity from './MyActivity/MyActivity';
import MyActions from './MyActions/MyActions';
import MyDescription from './MyDescription/MyDescription';
import { createFishtank } from '../../service/API/requests';

class Dashboard extends React.PureComponent {
    static propTypes = {
      history: ReactRouterPropTypes.history.isRequired,
      cookies: PropTypes.instanceOf(Cookies).isRequired,
      changeInfo: PropTypes.func.isRequired,
    }

    componentWillMount() {
      const { cookies } = this.props;
      const userJSON = cookies.get('userJSON');
      if (userJSON === undefined || userJSON.shoalId !== undefined) {
        const { history } = this.props;
        history.push('/');
      }
    }

    // TODO : change this, logic for new fishtank
    todoStartFishtank = async () => {
      const { history, changeInfo } = this.props;
      await createFishtank().then((res) => {
        changeInfo(res);
        history.push('/FishtankAdmin');
      });
    };

    render() {
      return (
        <div className="bg-color">
          <div>
            <h2 className="is-h2">Ma Bibliothèque</h2>
            <button
              type="button"
              onClick={this.todoStartFishtank}
            >
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
        </div>
      );
    }
}

export default withCookies(Dashboard);
