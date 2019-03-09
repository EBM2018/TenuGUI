import React from 'react';
import PropTypes from 'prop-types';
import CheckBox from './CheckBox';

export default class ActTextCheck extends React.PureComponent {
  static propTypes = {
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    listResponse: PropTypes.arrayOf([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  };

  state = {
    userResponse: [],
  };

  constructor() {
    super();
    this.activityContainer = React.createRef();
  }

  fctChecked = (indexChecked, responseChecked) => {
    const object = this.activityContainer.current;
    for (let i = 0; i < (object.childElementCount - 1); i += 1) {
      if (i === indexChecked - 1) {
        this.setState({ userResponse: responseChecked });
      } else {
        const checkrefered = this.refs[`elementCheck${i}`];
        checkrefered.unCheck();
      }
    }
  };

  render() {
    const inputs = [];
    const { listResponse, text } = this.props;
    for (let i = 0; i < listResponse.length; i += 1) {
      inputs.push(listResponse[i].rep);
    }

    return (
      <div id="container reponse" ref={this.activityContainer}>
        <div>
          {text}
        </div>
        {inputs.map((response, index) => (
          <CheckBox
            ref={`elementCheck${index}`}
            id={index}
            response={response}
            fctChecked={this.fctChecked}
          />
        ))}
      </div>
    );
  }
}
