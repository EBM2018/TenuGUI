import React from 'react';

import './Dashboard.css';

import MyActivity from './MyActivity/MyActivity';
import MyActions from './MyActions/MyActions';
import MyDescription from './MyDescription/MyDescription';

export default class Dashboard extends React.PureComponent {
    fct_start_fishtank = () => {
      this.props.history.push('/FishtankAdmin');
    };

    render() {
      return (
        <>
          <div>
            <> Ma Bibliothéque </>
            <button id="buttonStartFishtank" onClick={this.fct_start_fishtank}> Démarrer une séance </button>
          </div>
          <div id="dashboardContainer">
            <a id="firstColumn">
              <MyActivity />
              <MyActions />
            </a>
            <a id="C" />
            <MyDescription id="flex" />
          </div>
        </>
      );
    }
}
