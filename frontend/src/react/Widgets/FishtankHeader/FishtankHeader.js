import React from 'react';

import './FishtankHeader.css';

import PropTypes from 'prop-types';

export default class FishtankHeader extends React.PureComponent {

    static propTypes = {
        subject: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        my: PropTypes.string,
    };


    render() {
        return (
            <div id='NameHeader'>
                <div>
                    {this.props.my} Aquarium : {this.props.subject}
                </div>
                <div>
                    Séance ouverte le {this.props.date}
                </div>
            </div>
        );
    }
}