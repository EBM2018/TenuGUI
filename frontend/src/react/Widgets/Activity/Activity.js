import React from 'react';
import PropTypes from 'prop-types';

import './Activity.css';
//import Act_text_check from './Act_text_check.js';
import Act_text_field from './Act_text_field.js';

var dataW = [
    {
        name:'name_test',
        empAverage:3,
        reviewerAverage:4,
        stdAverageOfTask:1
    }
]
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
            }
        ]
    }
    /*
    ,
            {
                "type" : "check",
                "text":"Cb tu notes ce cour ?",
                "reponse":[
                    {"rep":"1"},
                    {"rep":"2"},
                    {"rep":"3"},
                    {"rep":"4"},
                    {"rep":"5"}
                ]
            }
     */

export default class Activity extends React.PureComponent {

    state = {
        data: data_json,
        subject: 'BBBBBBBBBB',
    };

    remplir = (data_json) => {
        var container = document.getElementById("container question");

        for (var i = 0; i < data_json.Question.length; i++) {
            if(data_json.Question[i].type === "field") {
                console.log(i)
                //container.innerHTML += '<Act_text_field text="'+ data_json.Question[i].text +'" />';
                container.innerHTML += this.put_Act_text_field("blalbla");
                //container.innerHTML += '<div>' + data_json.Question[i].text + '</div>';
            }
            if(data_json.Question[i].type === "check") {
                //container.innerHTML += '<Act_text_check text={data_json.Question[i].text} reponse={data_json.Question[i].reponse} />';
            }
        }
    }

    put_Act_text_field(text){
        return <Act_text_field text={text} />
    }

    componentDidMount = () =>{
        //this.remplir(data_json)
    }

    render() {
        var inputs = [];
        for (var i=0;i<data_json.Question.length; i++) {
            inputs.push( data_json.Question[i].text );
        }

        //console.log(inputs)

        return (
            <div>
                <a> {data_json.name} </a>
                {inputs.map(function (result) {
                    return <Act_text_field
                        text={result} 
                    />;
                })}
                <div>
                    <button>
                        Send
                    </button>
                </div>
            </div>
        );
    }
}
/*
<Act_text_field
    text={data_json.Question[0].text}/>
<Act_text_field
    text={data_json.Question[1].text}/>
<Act_text_field
    text={data_json.Question[2].text}/>
<Act_text_field
    text={data_json.Question[3].text}/>
<input type="checkbox" id="myCheck" />{data_json.Question[4].reponse[0].rep}

<Act_text_check
    text={data_json.Question[4].text}
    reponse={data_json.Question[4].reponse}
/>
*/