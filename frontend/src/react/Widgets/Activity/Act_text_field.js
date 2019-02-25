import React from 'react';
import PropTypes from 'prop-types';

export default class Act_text_field extends React.PureComponent {

    static propTypes = {
        text: PropTypes.string.isRequired
    };

    render() {
        return (
            <div>
                <a> {this.props.text} </a>
                <div>
                    <input type="text"/>
                </div>
            </div>
        );
    }
}