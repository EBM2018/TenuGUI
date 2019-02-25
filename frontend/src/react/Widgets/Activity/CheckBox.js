import React from 'react';
import PropTypes from 'prop-types';

export default class CheckBox extends React.PureComponent {

    static propTypes = {
        reponse: PropTypes.string.isRequired
    };

    render() {
        return (
            <>
                 <input type={"checkbox"}/>
                 <label> {this.props.reponse} </label>
            </>
        );
    }
}