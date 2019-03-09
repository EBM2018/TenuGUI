import React from 'react';

import { withRouter } from 'react-router-dom';

import './Dashboard.css';

import MyActivity from './MyActivity/MyActivity';
import MyActions from './MyActions/MyActions';
import MyDescription from './MyDescription/MyDescription';
// import { createFishtank } from '../../service/API/requests';

const ButtonChange = withRouter(({ history }) => (
  <button
    type="button"
    onClick={() => { history.push('/FishtankAdmin'); }}
  >
        Démarrer une séance
  </button>
));

export default class Dashboard extends React.PureComponent {
    uselessFct = () => {} // TODO : change this, logic for new fishtank

    render() {
      return (
        <>
          <div>
            <> Ma Bibliothèque </>
            <ButtonChange onClick={this.uselessFct} />
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
