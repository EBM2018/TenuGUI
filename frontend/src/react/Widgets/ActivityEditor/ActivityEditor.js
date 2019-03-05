import React from 'react';

import './ActivityEditor.css';
// import PropTypes from 'prop-types';
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
      response: [
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
      response: [
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

const dataField = {
  type: 'field',
  id_question: '',
  text: '',
};

const dataCheck = {
  type: 'check',
  id_question: '',
  text: '',
  response: [
    { rep: '' },
    { rep: '' },
    { rep: '' },
    { rep: '' },
  ],
};

const dataCheckMult = {
  type: 'checkMult',
  id_question: '',
  text: '',
  response: [
    { rep: '' },
    { rep: '' },
    { rep: '' },
    { rep: '' },
  ],
};

const dataResponse = {
  rep: '',
};


export default class Activity extends React.PureComponent {
  state = {
    data: dataJson,
  };

  send = () => { // pour des test à la con
    const { data } = this.state;
    console.log(data);
    console.log(data.Question[4].text);
  };

  editJsonQuestion = (index, newQuestion) => {
    const { data } = this.state;
    data.Question[index].text = newQuestion;
    this.setState({ data });
    this.forceUpdate();
  };

  editJsonResponse = (index, nbResponse, newResponse) => {
    const { data } = this.state;
    data.Question[index].response[nbResponse].rep = newResponse;
    console.log(data.Question[index].response[nbResponse].rep);
    this.setState({ data });
    this.forceUpdate();
  };

  newQuestionTextField = () => {
    const { data } = this.state;
    data.Question.push(dataField);
    this.setState({ data });
    this.forceUpdate();
  };

  newQuestionCheck = () => {
    const { data } = this.state;
    data.Question.push(dataCheck);
    this.setState({ data });
    this.forceUpdate();
  };

  newQuestionCheckMult = () => {
    const { data } = this.state;
    data.Question.push(dataCheckMult);
    this.setState({ data });
    this.forceUpdate();
  };

  deleteQuestion = (index) => {
    const { data } = this.state;
    data.Question.splice(index, 1);
    this.setState({ data });
    this.forceUpdate();
  };

  newCheckBox = (index) => {
    const { data } = this.state;
    data.Question[index].response.push(dataResponse);
    this.setState({ data });
    this.forceUpdate();
  };

  deleteCheckBoc = (index) => {
    const { data } = this.state;
    data.Question[index].response.splice(data.Question[index].response.length - 1, 1);
    this.setState({ data });
    this.forceUpdate();
  };

  render() {
    const { data } = this.state;
    return (
      <div ref="Progress1">
        <a>
          {data.name}
        </a>
        {data.Question.map((ques, index) => {
          if (ques.type === 'field') {
            return (
              <ActTextFieldEditor
                ref={`element${index}`}
                key={index}
                id={index}
                text={ques.text}
                editQuestion={this.editJsonQuestion}
                deleteHim={this.deleteQuestion}
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
                listResponse={ques.response}
                editQuestion={this.editJsonQuestion}
                editCheckBox={this.editJsonResponse}
                deleteHim={this.deleteQuestion}
                newCheckBox={this.newCheckBox}
                deleteCheckBox={this.deleteCheckBoc}
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
                listResponse={ques.response}
                editQuestion={this.editJsonQuestion}
                editCheckBox={this.editJsonResponse}
                deleteHim={this.deleteQuestion}
                newCheckBox={this.newCheckBox}
                deleteCheckBox={this.deleteCheckBoc}
              />
            );
          }
          return (<></>);
        })}
        <div>
          <button type="button" onClick={this.newQuestionTextField}>
            Add new Question with Text Field
          </button>
          <button type="button" onClick={this.newQuestionCheck}>
            Add new Question with Checkbox
          </button>
          <button type="button" onClick={this.newQuestionCheckMult}>
            Add new Question with Checkbox (multiple choice)
          </button>
        </div>
        <div>
          <button type="submit" onClick={this.send}>
            Send
          </button>
        </div>
      </div>
    );
  }
}
