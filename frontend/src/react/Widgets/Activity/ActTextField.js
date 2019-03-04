import React from 'react';
import PropTypes from 'prop-types';

export default class ActTextField extends React.PureComponent {
    static propTypes = {
      id: PropTypes.number.isRequired,
      text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
    };

    state = {
      user_reponse: '',
    }

    updateInputValue = (evt) => {
      this.setState({
        user_reponse: evt.target.value,
      });
    }

    getResponse = () => this.state.user_reponse

    render() {
      return (
        <div ref="inside">
          <a>
            {this.props.text}
          </a>
          <div>
            <input id="input_response" type="text" onChange={this.updateInputValue} />
          </div>
        </div>
      );
    }
}
