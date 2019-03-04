import React from 'react';

import './Activity.css';
import PropTypes from 'prop-types';
import ActTextField from './ActTextField';
import ActTextCheck from './ActTextCheck';
import ActTextCheckMult from './ActTextCheckMult';
import ActTextField from "../ActivityEditor/ActTextField";

const dataJson = {
  name: 'Questionnaire_name',
  Question: [
    {
      type: 'field',
      id_question: '0',
      text: "Qu'est ce que tu as appris ?",
    },
    {
      type: 'field',
      id_question: '0',
      text: "Qu'est ce qui t'as étonné ?",
    },
    {
      type: 'field',
      id_question: '0',
      text: "Qu'est ce que tu voudrais avoir plus ou en plus ?",
    },
    {
      type: 'field',
      id_question: '0',
      text: "Qu'est ce que tu voudrais avoir moins ou en moins ?",
    },
    {
      type: 'check',
      id_question: '0',
      text: 'Cb tu notes ce cour ?',
      reponse: [
        { rep: '1' },
        { rep: '2' },
        { rep: '3' },
        { rep: '4' },
        { rep: '5' },
      ],
    },
  ],
};
/* ,
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
*/

const dataJson2 = {
  name: 'Questionnaire_name_2',
  Question: [
    {
      type: 'field',
      id_question: '0',
      text: "Qu'est ce que tu as appris ?",
    },
    {
      type: 'check',
      id_question: '0',
      text: 'Cb tu notes ce cour ?',
      reponse: [
        { rep: '1' },
        { rep: '2' },
        { rep: '3' },
      ],
    },
  ],
};

const dataJsonNull = {
  name: 'No_activity',
  Question: [
  ],
};


export default class Activity extends React.PureComponent {
    state = {
      data: dataJson,
    };

    send = () => { // pour des test à la con
      const object = this.refs.Progress1;

      let stringToJSON = '{ userReponse: [';

      for (let i = 0; i < object.childElementCount - 2; i++) {
        const arg = this.refs[`element${i}`];
        stringToJSON += ' { id: ';

        stringToJSON += (this.state.data.Question[i].id_question);

        stringToJSON += ' { reponse: ';

        stringToJSON += (arg.state.user_reponse);

        stringToJSON += ' }';
      }
      stringToJSON += '] };';
      console.log(stringToJSON);
      // console.log(stringToJSON);
      /*
      console.log(stringToJSON);
      var newJSON = JSON.(stringToJSON);
        console.log(newJSON);
        console.log(newJSON.userReponse[2].reponse);
      */
      /*
        this.props.children.forEach(
            this.props.children,
            x => x
        )
        */
      /*
        this.setState({
                data: dataJsonNull
        });
        */
    };

    render() {
      return (
        <div ref="Progress1">
          <a>
            {this.state.data.name}
          </a>
          {this.state.data.Question.map((ques, index) => {
            if (ques.type === 'field') {
              return (
                <ActTextField
                  ref={`element${index}`}
                  key={index}
                  id={index}
                  text={ques.text}
                />
              );
            }
            if (ques.type === 'check') {
              return (
                <ActTextCheck
                  ref={`element${index}`}
                  key={index}
                  id={index}
                  text={ques.text}
                  list_reponse={ques.reponse}
                />
              );
            }
            if (ques.type === 'checkMult') {
              return (
                <ActTextCheckMult
                  ref={`element${index}`}
                  key={index}
                  id={index}
                  text={ques.text}
                  list_reponse={ques.reponse}
                />
              );
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
