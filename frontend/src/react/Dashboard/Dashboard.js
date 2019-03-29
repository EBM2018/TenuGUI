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
      const { history, cookies } = this.props;
      await createFishtank().then((res) => {
        cookies.set('fishtankId', res.body.fishtankId);
        console.log(cookies.get('fishtankId'));
        history.push('/FishtankAdmin');
      });
    };

    render() {
      return (
        <div className="bg-color">
          <div className="columns">
            <div className="column is-3">
              <h1 className="title is-h1 add-margin-left">Ma bibliothèque</h1>
            </div>
            <div className="column is-full">
              <button
                className="button is-link"
                type="button"
                name="button"
                onClick={this.todoStartFishtank}
              >
                      Démarrer une séance
              </button>
            </div>
          </div>
          <div className="columns">
            <p className="column add-margin-left add15-margin-top is-5">
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
/*
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
 */
