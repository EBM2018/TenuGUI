import React from 'react';
import PropTypes from 'prop-types';

import './FishtankAdmin.css';

import FishtankHeader from '../Widgets/FishtankHeader/FishtankHeader.js';
import ButtonLayout from './ButtonLayout/ButtonLayout.js';
import Command from './Command/Command.js';
import Preview from './Preview/Preview.js';
import Notification from './Notification/Notification.js';

export default class FishtankAdmin extends React.PureComponent {

    render() {
        return (
            <>
                <FishtankHeader
                    subject={'EBM example'}
                    date={'some date'}
                    my={'Mon'}
                />
                <ButtonLayout/>
                <div id={'container'}>
                    <Command id={'firstColumn'}/>

                    <Preview id={'secondColumn'}/>

                    <Notification/>
                </div>
            </>
        );
    }
}