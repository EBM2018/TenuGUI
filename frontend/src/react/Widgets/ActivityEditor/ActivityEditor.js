import React from 'react';
import PropTypes from 'prop-types';

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


const dataNull = {
  name: 'Questionnaire_name',
  Question: [
  ],
};

const abstractNull = {
  name: 'Questionnaire_name',
  abstract: '',
};

const dataResponse = {
  rep: '',
};

export default class ActivityEditor extends React.PureComponent {
  static propTypes = {
    close: PropTypes.func.isRequired,
  }

  state = {
    data: dataNull,
    abstract: abstractNull,
  };

  send = () => { // pour des test à la con
    // const { data } = this.state;
    // alert(data);
  };

  close = () => {
    const { close } = this.props;
    close();
  }

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
    const { data, abstract } = this.state;
    data.name = event.target.value;
    abstract.name = event.target.value;
    this.setState({ data, abstract });
    this.forceUpdate();
  };

  changeTitle = (event) => {
    const { abstract } = this.state;
    abstract.abstract = event.target.value;
    this.setState({ abstract });
    this.forceUpdate();
  };

  render() {
    const { data, abstract } = this.state;
    return (
      <div>
        <textarea onChange={this.changeTitle} value={data.name} />
        <textarea onChange={this.changeDescription} value={abstract.abstract} />
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
            Enregistrer
          </button>
        </div>
        <div>
          <button type="submit" onClick={this.close}>
            Quitter
          </button>
        </div>
      </div>
    );
  }
}
