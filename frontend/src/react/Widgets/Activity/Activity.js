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
/*
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
*/
/*
const dataJsonNull = {
  name: 'No_activity',
  Question: [
  ],
};
*/

export default class Activity extends React.PureComponent {
  state = {
    data: dataJson,
  };

  constructor() {
    super();
    this.activityContainer = React.createRef();
  }

  send = () => { // pour des test à la con
    const object = this.activityContainer.current;
    const { data } = this.state;

    let stringToJSON = '{ userReponse: [';

    for (let i = 0; i < object.childElementCount - 1; i += 1) {
      // const arg = object.children[i];
      const arg = this.refs[`element${i}`];
      // const arg = this.actRefs[`element${i}`].current;
      stringToJSON += ' { id: ';

      stringToJSON += (data.Question[i].id_question);

      stringToJSON += ' { reponse: ';

      stringToJSON += (arg.state.userResponse);

      stringToJSON += ' }';
    }
    stringToJSON += '] };';
    console.log(stringToJSON);
    /*
    this.setState({
      data: dataJsonNull,
    });
    */
  };

  render() {
    const { data } = this.state;
    return (
      <div ref={this.activityContainer}>
        {data.name}

        {data.Question.map((ques, index) => {
          // this.actRefs[`elementTest${index}`] = React.createRef();
          if (ques.type === 'field') {
            return (
              <ActTextField
                ref={`element${index}`}
                text={ques.text}
              />
            );
          }
          if (ques.type === 'check') {
            return (
              <ActTextCheck
                ref={`element${index}`}
                text={ques.text}
                listResponse={ques.response}
              />
            );
          }
          if (ques.type === 'checkMult') {
            return (
              <ActTextCheckMult
                ref={`element${index}`}
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
      </div>
    );
  }
}
