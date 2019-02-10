import React from 'react';
import PropTypes from 'prop-types';

import './Fishtanks.css';

import Bandeau from './NameHeader/NameHeader.js';
import ButtonLayout from './ButtonLayout/ButtonLayout.js';
import ActivityContainer from './ActivityContainer/ActivityContainer.js';

export default class Fishtanks extends React.PureComponent {

    render() {
        return (
            <>
                <Bandeau
                    subject={'EBM example'}
                    date={'some date'}
                />
                <ButtonLayout/>
                <ActivityContainer/>
            </>

            /*
            <>
                Fishtanks
            </>
            */
            /*
            <div id="Fishtanks">
                <div id="stripe">
                    bandeau
                </div>
                <div id="button layout">
                    bandeau
                </div>
                <div id="activityContainer">

                </div>
            </div>
            */
        );
    }
}