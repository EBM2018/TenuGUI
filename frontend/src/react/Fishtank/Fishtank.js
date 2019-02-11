import React from 'react';
import PropTypes from 'prop-types';

import './Fishtank.css';

import FishtankHeader from '../Widgets/FishtankHeader/FishtankHeader.js';
import ButtonLayout from './ButtonLayout/ButtonLayout.js';
import ActivityContainer from './ActivityContainer/ActivityContainer.js';

export default class Fishtank extends React.PureComponent {

    render() {
        return (
            <>
                <FishtankHeader
                    subject={'EBM example'}
                    date={'some date'}
                />
                <ButtonLayout/>
                <ActivityContainer/>
            </>
        );
    }
}