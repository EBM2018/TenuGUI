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
      idQuestion: '0',
      text: "Qu'est ce que tu as appris ?",
    },
    {
      type: 'field',
      idQuestion: '0',
      text: "Qu'est ce qui t'as étonné ?",
    },
    {
      type: 'field',
      idQuestion: '0',
      text: "Qu'est ce que tu voudrais avoir plus ou en plus ?",
    },
    {
      type: 'field',
      idQuestion: '0',
      text: "Qu'est ce que tu voudrais avoir moins ou en moins ?",
    },
    {
      type: 'check',
      idQuestion: '0',
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

const dataField = {
  type: 'field',
  idQuestion: '',
  text: '',
};

const dataCheck = {
  type: 'check',
  idQuestion: '',
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
  idQuestion: '',
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


export default class ActivityEditor extends React.PureComponent {
  state = {
    data: dataJson,
  };

  send = () => { // pour des test à la con
    // const { data } = this.state;
    // alert(data);
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

  changeTitle = (event) => {
    const { data } = this.state;
    data.name = event.target.value;
    this.setState({ data });
    this.forceUpdate();
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <textarea onChange={this.changeTitle} value={data.name} />
        {data.Question.map((ques, index) => {
          if (ques.type === 'field') {
            return (
              <ActTextFieldEditor
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
