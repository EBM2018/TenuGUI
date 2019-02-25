import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from "./CheckBox.js";

export default class Act_text_check extends React.PureComponent {

    static propTypes = {
        text: PropTypes.string.isRequired,
        list_reponse: PropTypes.object
    };

    render() {
        var inputs = [];
        for (var i=0;i<this.props.list_reponse.length; i++) {
            inputs.push( i );
        }

        return (
            <div id={"container reponse"}>
                {inputs.map(function (reponse) {
                    console.log(reponse)
                    return <CheckBox
                                reponse={reponse}
                            />;
                })}
            </div>
        );
    }
}