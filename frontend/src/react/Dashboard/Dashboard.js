import React from 'react';

import './Dashboard.css';

import MyActivity from './MyActivity/MyActivity.js';
import MyActions from './MyActions/MyActions.js';
import MyDescription from './MyDescription/MyDescription.js';

export default class Dashboard extends React.PureComponent {

    render() {
        return (
            <>
                <div>
                    <> Ma Bibliothéque </>
                    <button id={'buttonStartFishtank'}> Démarrer une séance </button>
                </div>
                <div id ='dashboardContainer'>
                    <firstColumn id="firstColumn">
                        <MyActivity/>
                        <MyActions/>
                    </firstColumn>
                    <a id={"C"}> </a>
                    <MyDescription id="flex"/>
                </div>
            </>
        );
    }
}