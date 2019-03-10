import React from 'react';

import './Activity.css';
// import PropTypes from 'prop-types';
import ActTextField from './ActTextField';
import ActTextCheck from './ActTextCheck';
import ActTextCheckMult from './ActTextCheckMult';

const dataJson = {
  name: 'Questionnaire_name',
  Question: [
    {
      type: 'field',
      idQuestion: '1',
      text: "Qu'est ce que tu as appris ?",
    },
    {
      type: 'field',
      idQuestion: '2',
      text: "Qu'est ce qui t'as étonné ?",
    },
    {
      type: 'field',
      idQuestion: '3',
      text: "Qu'est ce que tu voudrais avoir plus ou en plus ?",
    },
    {
      type: 'field',
      idQuestion: '4',
      text: "Qu'est ce que tu voudrais avoir moins ou en moins ?",
    },
    {
      type: 'check',
      idQuestion: '5',
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

export default class Activity extends React.PureComponent {
    state = {
      data: dataJson,
      userReponse: {
        Question: [
        ],
      },
    };

    componentWillMount() {
      const newUserReponse = {
        Question: [
        ],
      };
      const { data } = this.state;
      for (let i = 0; i < data.Question.length; i += 1) {
        const modDataOneResponse = {
          id: 0,
          response: '',
        };
        modDataOneResponse.id = data.Question[i].idQuestion;
        newUserReponse.Question.push(modDataOneResponse);
      }
      this.setState({ userReponse: newUserReponse });
    }

    send = () => { // pour des test à la con
      const { userReponse } = this.state;
      console.log(userReponse.Question);
    };

    editResponse = (index, newResponse) => {
      const { userReponse } = this.state;
      userReponse.Question[index].response = newResponse;
      this.setState({ userReponse });
      this.forceUpdate();
    };

    render() {
      const { data } = this.state;
      return (
        <div>
          {data.name}
          {data.Question.map((ques, index) => {
            if (ques.type === 'field') {
              return (
                <ActTextField
                  id={index}
                  text={ques.text}
                  editResponse={this.editResponse}
                />
              );
            }
            if (ques.type === 'check') {
              const { userReponse } = this.state;
              return (
                <ActTextCheck
                  id={index}
                  text={ques.text}
                  listTextResponse={ques.response}
                  response={userReponse.Question[index]}
                  editResponse={this.editResponse}
                />
              );
            }
            if (ques.type === 'checkMult') {
              const { userReponse } = this.state;
              return (
                <ActTextCheckMult
                  id={index}
                  text={ques.text}
                  listTextResponse={ques.response}
                  response={userReponse.Question[index]}
                  editResponse={this.editResponse}
                />
              );
            }
            return (<></>);
          })}

          <div>
            <button type="submit" onClick={this.send}>
                    Send
            </button>
          </div>
        </div>
      );
    }
}
/*
          {data.Question.map((ques, index) => {
            if (ques.type === 'field') {
              return (
                <ActTextField
                  id={index}
                  text={ques.text}
                />
              );
            }
            if (ques.type === 'check') {
              return (
                <ActTextCheck
                  id={index}
                  text={ques.text}
                  listResponse={ques.response}
                />
              );
            }
            if (ques.type === 'checkMult') {
              return (
                <ActTextCheckMult
                  id={index}
                  text={ques.text}
                  listResponse={ques.response}
                />
              );
            }
            return (<></>);
          })}
          <div>
            <button type="submit" onClick={this.send}>
                        Send
            </button>
          </div>
          */
