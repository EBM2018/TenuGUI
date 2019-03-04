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
      deleteHim: PropTypes.func.isRequired,
    };

    clickDelete = () => {
      this.props.deleteHim(this.props.id);
    };

    changeText = (event) => {
      this.props.editQuestion(this.props.id, event.target.value);
    };

    render() {
      return (
        <div ref="inside">
          <textarea onChange={this.changeText} value={this.props.text} />
          <button onClick={this.clickDelete}> Delete </button>
          <div>
            <input id="input_response" type="text" onChange={this.updateInputValue} />
          </div>
        </div>
      );
    }
}
