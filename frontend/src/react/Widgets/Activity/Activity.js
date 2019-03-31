import React from 'react';

// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import ActTextField from './ActTextField';
import ActTextCheck from './ActTextCheck';
import ActTextCheckMult from './ActTextCheckMult';
import { postFishtankInteraction } from '../../../service/API/interactions';
// import index from '../../../service/Websockets';

export default class Activity extends React.PureComponent {
    static propTypes = {
      fishtankId: PropTypes.number.isRequired,
      idInteractions: PropTypes.arrayOf([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      data: PropTypes.arrayOf([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      deleteData: PropTypes.func.isRequired,
    }

    state = {
      userReponse: {
        referenceInteractionId: 0,
        content: [
        ],
      },
    };

    componentWillMount() {
      this.genereateJSONUserResponse();
    }

    componentDidUpdate(oldProps) {
      const newProps = this.props;
      if (oldProps.data !== newProps.data) {
        this.genereateJSONUserResponse();
      }
    }

    genereateJSONUserResponse = () => {
      const { data, fishtankId } = this.props;
      const newUserResponse = {
        referenceInteractionId: 0,
        content: [
        ],
      };
      newUserResponse.referenceInteractionId = fishtankId;
      for (let i = 0; i < data.Question.length; i += 1) {
        const modDataOneResponse = {
          id: 0,
          answer: '',
        };
        modDataOneResponse.id = data.Question[i].idQuestion;
        newUserResponse.content.push(modDataOneResponse);
      }
      this.setState({ userReponse: newUserResponse });
    }

    send = () => { // pour des test à la con
      const { userReponse } = this.state;
      const { fishtankId, idInteractions, deleteData } = this.props;
      console.log(userReponse);
      postFishtankInteraction(
        fishtankId,
        idInteractions.PARTICIPANT.FEEDBACK_SUBMIT,
        userReponse,
      );
      deleteData();
    };

    editResponse = (indexQuestion, newResponse) => {
      const { userReponse } = this.state;
      userReponse.content[indexQuestion].answer = newResponse;
      this.setState({ userReponse });
      // this.forceUpdate();
    };

    render() {
      const { data } = this.props;
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
