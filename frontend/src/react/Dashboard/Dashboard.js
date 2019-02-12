import React from 'react';

import './Dashboard.css';

import MyActivity from './MyActivity/MyActivity.js';
import MyActions from './MyActions/MyActions.js';
import MyDescription from './MyDescription/MyDescription.js';

export default class Dashboard extends React.PureComponent {

    fct_start_fishtank = () => {
        this.props.history.push('/FishtankAdmin');
    };

    render() {
        return (
            <>
                <div>
                    <> Ma Bibliothéque </>
                    <button id={'buttonStartFishtank'} onClick={this.fct_start_fishtank}> Démarrer une séance </button>
                </div>
                <div id ='dashboardContainer'>
                    <a id="firstColumn">
                        <MyActivity/>
                        <MyActions/>
                    </a>
                    <a id={"C"}> </a>
                    <MyDescription id="flex"/>
                </div>
            </>
        );
    }
}