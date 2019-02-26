import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from "./CheckBox.js";

export default class Act_text_check extends React.PureComponent {

    static propTypes = {
        text: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
        list_reponse: PropTypes.array
    };

    render() {
        var inputs = [];
        for (var i=0;i<this.props.list_reponse.length; i++) {
            inputs.push(this.props.list_reponse[i].rep );
        }

        return (
            <div id={"container reponse"}>
                <div> {this.props.text} </div>
                {inputs.map(function (reponse, index) {
                    return <CheckBox
                                key={index}
                                reponse={reponse}
                            />;
                })}
            </div>
        );
    }
}