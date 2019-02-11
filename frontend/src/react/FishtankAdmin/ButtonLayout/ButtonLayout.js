import React from 'react';

import './ButtonLayout.css';

import PropTypes from 'prop-types';
//import ListSpeed from './ListSpeed/ListSpeed.js';
//import ListAccuracy from './ListAccuracy/ListAccuracy.js';

export default class ButtonLayout extends React.PureComponent {

    render() {
        return (
            <d>
                <div id='ButtonLayoutContainer'>
                    <button id='AskUnderstanding'>
                        Vous avez compris ?
                    </button>

                    <button id='AskSummary'>
                        Faites un résumé
                    </button>

                    <button id='AskPosition'>
                        Vous en êtes où ?
                    </button>

                    <button id='AskAttention'>
                        Votre attention svp !
                    </button>

                    <button id='Reboost'>
                        Reboost
                    </button>
                </div>
            </d>
        );
    }
}