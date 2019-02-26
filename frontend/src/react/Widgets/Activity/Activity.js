import React from 'react';
import PropTypes from 'prop-types';

import './Activity.css';
import Act_text_field from './Act_text_field.js';
import Act_text_check from './Act_text_check.js';

let data_json =
    {
        "name": "Questionnaire_name",
        "Question" : [
            {
                "type": "field",
                "text": "Qu'est ce que tu as appris ?",
                "user_reponse": ""
            },
            {
                "type": "field",
                "text": "Qu'est ce qui t'as étonné ?",
                "user_reponse": ""
            },
            {
                "type": "field",
                "text": "Qu'est ce que tu voudrais avoir plus ou en plus ?",
                "user_reponse": ""
            },
            {
                "type": "field",
                "text":"Qu'est ce que tu voudrais avoir moins ou en moins ?",
                "user_reponse": ""
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
                ],
                "user_reponse": ""
            }
        ]
    }


let data_json_2 =
    {
        "name": "Questionnaire_name_2",
        "Question" : [
            {
                "type": "field",
                "text": "Qu'est ce que tu as appris ?",
                "user_reponse": "ini"
            },
            {
                "type": "check",
                "text": "Cb tu notes ce cour ?",
                "reponse":[
                    {"rep": "1"},
                    {"rep": "2"},
                    {"rep": "3"},
                ],
                "user_reponse": "ini"
            }
        ]
    }

let data_json_null =
    {
        "name": "No_activity",
        "Question" : [
        ]
    }




export default class Activity extends React.PureComponent {

    state = {
        data: data_json,
    }

    send = () => { // pour des test à la con
        console.log('send')
        //console.log(React.Children.count())
        //console.log(this.props.children)
        //console.log(this.textInput.current)
        //console.log(this.textInput.current.children)
        var object = this.refs.Progress1;


        for( var i=0; i< object.childElementCount-2; i++){

            //var ref_element = "element" + i
            //console.log(ref_element)
            var arg = this.refs['element' + i]
            console.log(arg.state)
            console.log(arg.state.user_reponse)

            /*
            console.log(object.children[i])
            console.log(object.children[i].state)
            console.log(object.children[i].children[1].children[0].attributes)
            console.log(object.children[i].children[1].children[0].value)
            */
        }

        /*
        this.props.children.forEach(
            this.props.children,
            x => x
        )
        */
        /*
        this.setState({
                data: data_json_null
        });
        */
    }

    updateResponse = (response, id) => {
        let new_data = this.state.data;
        new_data.Question[id].user_reponse = response;
        this.setState({data: new_data})
    }

    render() {
        return (
            <div ref="Progress1">
                <a> {this.state.data.name} </a>
                {this.state.data.Question.map(function (ques, index) {
                    console.log(ques.type);
                    console.log("index " + index);
                    console.log("index " + typeof index);

                    if(ques.type === "field"){
                        return <Act_text_field
                            ref={"element" + index}
                            key={index}
                            id={index}
                            text={ques.text}
                            user_reponse={ques.user_reponse}
                        />;
                    }
                    if(ques.type === "check"){
                        return <Act_text_check
                            ref={"element" + index}
                            key={index}
                            text={ques.text}
                            list_reponse={ques.reponse}
                        />;
                    }
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
