import React from 'react';

import './ActivityEditor.css';
import PropTypes from 'prop-types';
import ActTextFieldEditor from './ActTextFieldEditor';
import ActTextCheckEditor from './ActTextCheckEditor';
import ActTextCheckMultEditor from './ActTextCheckMultEditor';

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


export default class ActivityEditor extends React.PureComponent {
    state = {
      data: dataJson,
    };

    send = () => { // pour des test à la con
      console.log(this.state.data);
      console.log(this.state.data.Question[4].text);
    };

    editJsonQuestion = (index, newQuestion) => {
      const newJ = this.state.data;
      newJ.Question[index].text = newQuestion;
      this.setState({ data: newJ });
    };

    editJsonReponse = (index, nbReponse, newReponse) => {
      const newJ = this.state.data;
      newJ.Question[index].reponse[nbReponse].rep = newReponse;
      this.setState({ data: newJ });
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
                <ActTextFieldEditor
                  ref={`element${index}`}
                  key={index}
                  id={index}
                  text={ques.text}
                  editQuestion={this.editJsonQuestion}
                />
              );
            }
            if (ques.type === 'check') {
              return (
                <ActTextCheckEditor
                  ref={`element${index}`}
                  key={index}
                  id={index}
                  text={ques.text}
                  list_reponse={ques.reponse}
                  editQuestion={this.editJsonQuestion}
                  editReponse={this.editJsonReponse}
                />
              );
            }
            if (ques.type === 'checkMult') {
              return (
                <ActTextCheckMultEditor
                  ref={`element${index}`}
                  key={index}
                  id={index}
                  text={ques.text}
                  list_reponse={ques.reponse}
                  editQuestion={this.editJsonQuestion}
                  editReponse={this.editJsonReponse}
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
