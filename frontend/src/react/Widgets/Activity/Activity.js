import React from 'react';

// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import ActTextField from './ActTextField';
import ActTextCheck from './ActTextCheck';
import ActTextCheckMult from './ActTextCheckMult';
import { postFishtankInteraction } from '../../../service/API/interactions';
// import index from '../../../service/Websockets';

/*
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
*/
const dataNull = {
  name: '',
  Question: [
  ],
};

export default class Activity extends React.PureComponent {
    static propTypes = {
      fishtankId: PropTypes.number.isRequired,
      idInteractions: PropTypes.arrayOf([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
    }

    state = {
      data: dataNull,
      userReponse: {
        Question: [
        ],
      },
    };

    componentWillMount() {
      this.genereateJSONUserResponse();
    }

    genereateJSONUserResponse = () => {
      const newUserResponse = {
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
        newUserResponse.Question.push(modDataOneResponse);
      }
      this.setState({ userReponse: newUserResponse });
    }

    send = () => { // pour des test à la con
      const { userReponse } = this.state;
      const { fishtankId, idInteractions } = this.props;
      postFishtankInteraction(
        fishtankId,
        idInteractions.PARTICIPANT.FEEDBACK_SUBMIT,
        userReponse,
      );
    };

    editResponse = (indexQuestion, newResponse) => {
      const { userReponse } = this.state;
      userReponse.Question[indexQuestion].response = newResponse;
      this.setState({ userReponse });
      this.forceUpdate();
    };

    render() {
      const { data } = this.state;
      return (
        <div className="columns is-mobile">
          <div className="column is-9 is-offset-1">
            <h1 className="title is-t1">{data.name}</h1>
            {data.Question.map((ques, index) => {
              if (ques.type === 'field') {
                return (
                  <ActTextField
                    key={ques.idQuestion}
                    id={index}
                    text={ques.text}
                    editResponse={this.editResponse}
                  />
                );
              }
              if (ques.type === 'check') {
                return (
                  <ActTextCheck
                    key={ques.idQuestion}
                    id={index}
                    text={ques.text}
                    listTextResponse={ques.response}
                    editResponse={this.editResponse}
                  />
                );
              }
              if (ques.type === 'checkMult') {
                return (
                  <ActTextCheckMult
                    key={ques.idQuestion}
                    id={index}
                    text={ques.text}
                    listTextResponse={ques.response}
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
        </div>
      );
    }
}
