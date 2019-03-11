import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';

import './Dashboard.css';

import MyActivity from './MyActivity/MyActivity';
import MyActions from './MyActions/MyActions';
import MyDescription from './MyDescription/MyDescription';
import { createFishtank } from '../../service/API/requests';

const ButtonChange = withRouter(({ history }) => (
  <button
    type="button"
    onClick={() => { history.push('/FishtankAdmin'); }}
  >
        Démarrer une séance
  </button>
));

export default class Dashboard extends React.PureComponent {
    static propTypes = {
      history: PropTypes.object,
    }

    uselessFct = () => {}

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
// <button type="button" id="buttonStartFishtank"
// onClick={() => {history.push('/FishtankAdmin')}}>
// Démarrer une séance </button>
