import React from 'react';

import './NameHeader.css';

import PropTypes from 'prop-types';

export default class NameHeader extends React.PureComponent {

    static propTypes = {
        subject: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    };


    render() {
        return (
            <div id='NameHeader'>
                <div>
                    Aquarium : {this.props.subject}
                </div>
                <div>
                    Séance ouverte le {this.props.date}
                </div>
            </div>
        );
    }
}