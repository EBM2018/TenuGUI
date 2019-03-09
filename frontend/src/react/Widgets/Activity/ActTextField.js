import React from 'react';
import PropTypes from 'prop-types';

export default class ActTextField extends React.PureComponent {
  static propTypes = {
    text: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
  };

  state = {
    userResponse: '',
  };

  updateInputValue = (evt) => {
    this.setState({
      userResponse: evt.target.value,
    });
  };

  getResponse = () => {
    const { userResponse } = this.state;
    return userResponse;
  };

  render() {
    const { text } = this.props;
    return (
      <div>
        {text}
        <div>
          <input id="input_response" type="text" onChange={this.updateInputValue} />
        </div>
      </div>
    );
  }
}
