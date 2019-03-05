import React from 'react';

import './Dashboard.css';

import MyActivity from './MyActivity/MyActivity';
import MyActions from './MyActions/MyActions';
import MyDescription from './MyDescription/MyDescription';
import { createFishtank } from '../../service/API/requests';

export default class Dashboard extends React.PureComponent {
    todoStartFishtank = async () => { // TODO : change this shit
      const { history } = this.props;
      createFishtank(() => history.push('/FishtankAdmin'));
    };

    render() {
      return (
        <>
          <div>
            <> Ma Bibliothèque </>
            <button type="button" id="buttonStartFishtank" onClick={this.todoStartFishtank}> Démarrer une séance </button>
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
