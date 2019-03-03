import React from 'react';
import PropTypes from 'prop-types';

export default class ActTextFieldEditor extends React.PureComponent {
    static propTypes = {
      id: PropTypes.number.isRequired,
      text: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]).isRequired,
      editQuestion: PropTypes.func.isRequired,
    };

    state = {
      text: this.props.text,
    };

    changeText = (event) => {
      this.setState({ text: event.target.value });
      this.props.editQuestion(this.props.id, event.target.value);
    };

    render() {
      return (
        <div ref="inside">
          <textarea onChange={this.changeText} value={this.state.text} />
          <div>
            <input id="input_response" type="text" onChange={this.updateInputValue} />
          </div>
        </div>
      );
    }
}
