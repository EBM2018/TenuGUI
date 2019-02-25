import React from 'react';
import PropTypes from 'prop-types';

import './Activity.css';
import Act_text_field from './Act_text_field.js';
import Act_text_check from './Act_text_check.js';

var data_json =
    {
        "name": "Questionnaire_name",
        "Question" : [
            {
                "type": "field",
                "text": "Qu'est ce que tu as appris ?"
            },
            {
                "type": "field",
                "text": "Qu'est ce qui t'as étonné ?"
            },
            {
                "type": "field",
                "text": "Qu'est ce que tu voudrais avoir plus ou en plus ?"
            },
            {
                "type": "field",
                "text":"Qu'est ce que tu voudrais avoir moins ou en moins ?"
            },
            {
                "type": "check",
                "text": "Cb tu notes ce cour ?",
                "reponse":[
                    {"rep": "1"},
                    {"rep": "2"},
                    {"rep": "3"},
                    {"rep": "4"},
                    {"rep": "5"}
                ]
            }
        ]
    }

var data_json_2 =
    {
        "name": "Questionnaire_name_2",
        "Question" : [
            {
                "type": "field",
                "text": "Qu'est ce que tu as appris ?"
            },
            {
                "type": "check",
                "text": "Cb tu notes ce cour ?",
                "reponse":[
                    {"rep": "1"},
                    {"rep": "2"},
                    {"rep": "3"},
                ]
            }
        ]
    }

var data_json_null =
    {
        "name": "No_activity",
        "Question" : [
        ]
    }




export default class Activity extends React.PureComponent {

    state = {
        data: data_json,
        index: 0
    }

    swap = () => { // pour des test à la con
        if(this.state.data == data_json) {
            this.setState({data: data_json_2})
        }
        if(this.state.data == data_json_2) {
            this.setState({data: data_json})
        }
    }

    send = () => { // pour des test à la con
        {this.state.data.Question.map(function (ques) {
        })}
        this.setState({data: data_json_null})
    }

    

    render() {
        return (
            <div>
                <a> {this.state.data.name} </a>
                {this.state.data.Question.map(function (ques, index) {
                    if(ques.type === "field"){
                        return <Act_text_field
                            id={index}
                            text={ques.text}
                        />;
                    }
                    if(ques.type === "check"){
                        return <Act_text_check
                            id={index}
                            text={ques.text}
                            list_reponse={ques.reponse}
                        />;
                    }
                    this.setState({index: index});
                })}
                <div>
                    <button onClick={this.send}>
                        Send
                    </button>
                </div>
            </div>
        );
    }
}
