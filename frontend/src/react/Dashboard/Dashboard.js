import React from 'react';
import request from 'superagent';

import './Dashboard.css';

import MyActivity from './MyActivity/MyActivity';
import MyActions from './MyActions/MyActions';
import MyDescription from './MyDescription/MyDescription';
import { moveToSocketsNamespaceForFishtank } from '../../ws-client';

export default class Dashboard extends React.PureComponent {
    todoStartFishtank = async () => { // TODO : change this shit
      request
        .post('/api/fishtanks')
        .send({
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InByb2YifQ.DeurWESF3J4QGtrQrlJ2pR4cxxJI1RBAKbTnqQqcZlc',
          shoalId: 1,
        })
        .set('Accept', 'application/json')
        .then(res => moveToSocketsNamespaceForFishtank(res.body.fishtankId))
        .then(() => this.props.history.push('/FishtankAdmin'));
    };

    render() {
      return (
        <>
          <div>
            <> Ma Bibliothéque </>
            <button id="buttonStartFishtank" onClick={this.todoStartFishtank}> Démarrer une séance </button>
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
