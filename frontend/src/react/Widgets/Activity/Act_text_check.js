import React from 'react';
import PropTypes from 'prop-types';
import Act_text_field from "./Act_text_field";

export default class Act_text_check extends React.PureComponent {

    static propTypes = {
        text: PropTypes.string.isRequired,
        reponse: PropTypes.string.isRequired
    };

    remplir = (data_reponse) => {
        var container = document.getElementById("container reponse");

        for (var i = 0; i < data_reponse.length; i++) {
            container.innerHTML += <Act_text_field
                text={data_json.Question[i].text}
            />;
        }
    }

    componentDidMount = () => {
        this.remplir(this.state.reponse)
    }

    render() {
        return (
            <div id={"container reponse"}>
            </div>
        );
    }
}